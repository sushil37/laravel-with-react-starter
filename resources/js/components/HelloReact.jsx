import React from 'react';
import { createRoot } from 'react-dom/client';

function HelloReact() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>Welcome to Laravel with react component</h2></div>
                        <div className="card-body">Hello World</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HelloReact;

const rootElement = document.getElementById('main')
const root = createRoot(rootElement);

root.render(<HelloReact />);
