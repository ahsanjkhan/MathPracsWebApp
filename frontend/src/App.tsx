import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';

export default function App() {
  return (
    <Box padding="l">
      <ContentLayout header={<Header variant="h1">MathPracs</Header>}>
        <Container header={<Header variant="h2">Student portal</Header>}>
          Coming soon: view upcoming sessions, session history, and balances.
        </Container>
      </ContentLayout>
    </Box>
  );
}
