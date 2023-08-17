import { Container } from '@/design-system/Atom/Container';
import { RoadMapContent } from '@/design-system/Molecules/RoadMapContent';
import RoadmapNavbar from '../Navbar/Roadmap';

const Roadmap = () => {
  return (
    <Container>
      <RoadmapNavbar />

      <RoadMapContent />
    </Container>
  );
};

export default Roadmap;
