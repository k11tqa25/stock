
import React from 'react';
import Chart from './HeikinAshi';
import { getData } from "./utils";
import { TypeChooser } from "react-stockcharts/lib/helper";

class HeikinAshiChartComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	  }

	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state.data == null) {
			return <div>Loading...</div>
		}
		console.log(this.state.data)
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default HeikinAshiChartComponent