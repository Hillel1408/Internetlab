import { Layout, Intro, HowItWorks, TextBlock, Block3, Faq, Form } from "components";

function App() {
    return (
        <Layout>
            <>
                <Intro />
                <HowItWorks />
                <Block3 />
                <Faq />
                <TextBlock />
                <Form />
            </>
        </Layout>
    );
}

export default App;
