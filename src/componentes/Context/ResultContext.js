import React from 'react';

const API_KEY = '1ed15d720b48745579f98802194bab26';

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

const ResultsContext = React.createContext()

class ResultsContextProvider extends React.Component {
    state = {
        
    }
}    

export default ResultsContextProvider