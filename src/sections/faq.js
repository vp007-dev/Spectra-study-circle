/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What if student dont want to take course?',
    contents: (
      <div>
        There is no problem. for first time we give free trial for all after that if he dont want to take course then there is no problem.
      </div>
    ),
  },
  {
    title: 'How many subjects you provoide to students?',
    contents: (
      <div>
        We provoide Maths, SST, Science(all parts).
      </div>
    ),
  },
  {
    title: `Which class students you teach?`,
    contents: (
      <div>
        8th, 9th, 10th for now. 
      </div>
    ),
  },
  {
    title: `What if i am not near to your centre cant take offline class then?`,
    contents: (
      <div>
        Online class! we provide online classes for all students too!.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Do you have any quesiton?"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
