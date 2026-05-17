import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';

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
      {freelancerProfiles.map((profile, index) => (
        <Card
          key={index}
          label={profile.name}
          title={profile.jobTitle}
          picture={profile.picture}
        />
      ))}
    </div>
  );
}

export default Freelancers;
