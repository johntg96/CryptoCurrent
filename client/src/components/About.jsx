export default function About() {
    return (
        <>
            <div className="container about">
                <h2>About</h2>
                <p>CryptoCurrent is an online tool to primarily track the prices of various crypto currencies.
                    <br/>Other features I'd like to implement include:
                    <ul>
                        <li>Blog</li>
                        <ul>
                            <li>comment section</li>
                        </ul>
                        <li>News Articles</li>
                        <ul>
                            <li>aggregate news feed automatically</li>
                            <li>highlight specific articles</li>
                            <li>filter based on coin, token, and timeline.</li>
                        </ul>
                    </ul>
                </p>
                <h4>Development</h4>
                <p>Written in JSX (React + Vite)</p>
                <p>Repository is located <a href="https://github.com/johntg96/CryptoCurrent">here</a> (GitHub).</p>
                <p>This is very early-stage, to-do:</p>
                <ul>
                    <li>CSS grid framework (vanilla styling with skeleton CSS grid framework e.g <a href="https://simplegrid.io/">Simple Grid</a>)</li>
                    <li>Reliable crypto currency price index API</li>
                    <ul>
                        <li><a href="https://rapidapi.com/Coinranking/api/coinranking1/">Coinranking</a></li>
                        <li><a href="https://rapidapi.com/lbraciszewski/api/coinpaprika1/">Coinpaprika</a></li>
                    </ul>
                    <li>Potential Node.js packages:</li>
                    <ul>
                        <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
                    </ul>
                </ul>
                <p>Resources:</p>
                <ul>
                    <li><a href="https://www.freecodecamp.org/news/work-with-third-party-libraries-in-react/">freeCodeCamp Crypto Exchange Rate Web App</a></li>
                </ul>
            </div>
        </>
    )
}