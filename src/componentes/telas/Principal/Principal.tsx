import * as React from 'react';

class Principal extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }
    public render() {
        return (
            <>
                Olá Mundo!
            </>
        );
    }
}

export { Principal };
