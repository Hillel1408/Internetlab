import { Layout, Intro, HowItWorks, TextBlock, Block3, Faq, Form, Reviews } from "components";

function App() {
    return (
        <Layout>
            <>
                {/* <Intro /> */}
                <HowItWorks />
                {/* <Block3 />
                <Reviews /> */}
                <Faq />
                <TextBlock />
                <Form />
            </>
        </Layout>
    );
}

export default App;
