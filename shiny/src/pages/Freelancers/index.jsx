import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/style/Atoms';

const FreelancersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    margin-bottom: 40px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  //grid-template-rows: 350px 350px;
  width: 80%;
`;

function Freelancers() {
  const [freelancerData, setFreelancerData] = useState([]);
  const [isProfilesLoading, setIsProfilesLoading] = useState(false);

  useEffect(() => {
    setIsProfilesLoading(true);
    fetch(`http://10.10.28.62:8000/freelancers`).then((response) =>
      response
        .json()
        .then((data) => {
          setFreelancerData(data.freelancersList);
          setIsProfilesLoading(false);
          console.log('nexius@FreelancersData:', data.freelancersList);
        })
        .catch((error) => {
          console.log('nexius@EError:' + error);
          setIsProfilesLoading(false);
        }),
    );
  }, []);

  return (
    <FreelancersContainer>
      <h1>Freelancers</h1>
      {isProfilesLoading ? (
        <Loader />
      ) : (
        <CardContainer>
          {freelancerData.map((profile, index) => (
            <Card
              key={index}
              label={profile.name}
              title={profile.job}
              picture={profile.picture}
            />
          ))}
        </CardContainer>
      )}
    </FreelancersContainer>
  );
}

export default Freelancers;
