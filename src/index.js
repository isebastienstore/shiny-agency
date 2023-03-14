import React from 'react'
import {createRoot} from 'react-dom/client'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from "./pages/Home";
import Survey from "./pages/survey";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import {SurveyProvider, ThemeProvider} from "./utils/context";
import Footer from "./components/Footer";
import GlobalStyle from "./utils/style/GlobalStyle";


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle/>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/survey/:questionNumber" element={<Survey />}/>
                        <Route exact path="/results" element={<Results />}/>
                        <Route exact path="/freelances" element={<Freelances />}/>
                        <Route path="/*" element={<Error />}/>
                    </Routes>
                    <Footer/>
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
)
