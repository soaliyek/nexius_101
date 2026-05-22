import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px 350px;
`;

const freelancerProfiles = [
  {
    name: 'John Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Jane Doe',
    jobTitle: 'Frontend Developer',
    picture: DefaultPicture,
  },
  {
    name: 'Jack Doe',
    jobTitle: 'Backend Developer',
    picture: DefaultPicture,
  },
];

function Freelancers() {
  return (
    <div>
      <h1>Freelancers</h1>
      <CardContainer>
        {freelancerProfiles.map((profile, index) => (
          <Card
            key={index}
            label={profile.name}
            title={profile.jobTitle}
            picture={profile.picture}
          />
        ))}
      </CardContainer>
    </div>
  );
}

export default Freelancers;
