import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>What is cors?</h2>
            <br />
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            <br />
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <br />
            <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together., Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <br />
            <h2>How does the private route work?</h2>
            <br />
            <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
        </div>
    );
};

export default Blog;