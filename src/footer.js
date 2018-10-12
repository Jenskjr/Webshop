import React from "react"

class Footer extends React.Component {

	render () {
		return (
				<div>
					<footer style={{height: "100px"}} className="bg-dark mt-4">
		       			<div className="container text-white p-4">
		       				<a style={{color: "white"}} href="www.jenskjr.dk">Jenskjr.dk</a>
		       			</div>
					</footer>
				</div>
			)
	}
}

export default Footer