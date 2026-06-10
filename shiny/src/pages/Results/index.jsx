import { useContext } from 'react';
import { SurveyContext } from '../../utils/context';
import { useFetch, useTheme } from '../../utils/hooks';
import { Loader, StyledLink } from '../../utils/style/Atoms';
import styled from 'styled-components';
import colors from '../../utils/style/colors';


// Styles
const LoadWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;

    background-color: ${
        ({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark
    };
`;

const resultsTitle = styled.h1`
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;

    & > span {
        padding-left: 10px;
    }
    
    color: {
        ({ theme }) => theme === 'light' ? '#000000' : '#ffffff'
    };
`;

const JobTitle = styled.h2`
    text-transform: capitalize;
    color: {
        ({ theme }) => theme === 'light' ? colors.primary : colors.backgroundLight
    };
`;

const DescriptionWrapper = styled.div`
    padding: 60px;
`;

const JobDescription = styled.div`
    font-size: 18px;

    & > p {
        color: {
            ({ theme }) => theme === 'light' ? colors.secondary : '#ffffff'
        };
        marging-block-start: 5px;
    }

    & > span {
        font-size: 20px;
    }
`;

export function formatQueryParams(results) {
    const answerNumbers = Object.keys(results);

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0;
        const separator = isFirstParam ? '' : '&';
        // Backend expects params named a1, a2, ...
        return `${previousParams}${separator}a${answerNumber}=${results[answerNumber]}`
    }, '')
}

export function formatJobList(title, listLength, index) {
    if( index === listLength - 1) {
        return title;
    } else {
        return `${title},`
    }
}

function Results() {
    const { theme } = useTheme();
    const { answers } = useContext(SurveyContext);
    const queryParams = formatQueryParams(answers);

    const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${queryParams}`);

    if(error) {
        return (
            <div>
                <h1>Results Page</h1>
                <p>Oups, something went wrong. Please try again later.</p>
            </div>
        )
    }

    const { resultsData } = data;

    return isLoading ? (
        <LoadWrapper>
            <Loader />
        </LoadWrapper>
    ) : (
        <ResultsContainer theme={theme}>

            <resultsTitle theme={theme}>
                You Require the following skills:
                {
                    resultsData.map((result, index) => (
                        <JobTitle key={`result-title-${index}-${result.title}`} theme={theme}>
                            {formatJobList(result.title, resultsData.length, index)}
                        </JobTitle>
                    ))
                }
            </resultsTitle>

            <StyledLink $isFullLink to="/freelancers">
                Take a look at freelancer profiles that match your needs.
            </StyledLink>

            <DescriptionWrapper>
                {
                    resultsData && resultsData.map((result, index) => (
                        <JobDescription key={`result-detail-${index}-${result.title}`} theme={theme}>
                            <p>{result.description}</p>
                        </JobDescription>
                    ))
                }
            </DescriptionWrapper>
        </ResultsContainer>
    );
}

export default Results;