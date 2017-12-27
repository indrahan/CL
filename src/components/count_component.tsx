import * as React from "react";

type CountProps = {}
type CountState = {}

export class Counter extends React.Component<CountProps, CountState>{
    constructor(props: CountProps) {
        super();
        //this.state = {count:0}
    }

    render() {
        return <div>
            <h1> Counter </h1>
            <button onClick={() => console.log("Clicked")}> Click </button>
        </div>
    }
}
