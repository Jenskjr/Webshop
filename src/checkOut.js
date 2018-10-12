import React from "react"

class checkOutInfo extends React.Component {
	
	render () {
		return (
			<div>
				<h4 className="mt-4 mb-4">Credit Card information</h4>
			     <form>
                    <div className="row">
            			<div className="col-md-2">First name: </div>
            			<div className="col-md-3 mt-2"><input type="text" name="firstname"/></div>
                    </div>
                    <div className="row">
      					<div className="col-md-2">Last name: </div>
      					<div className="col-md-3 mt-2"><input type="text" name="lastname"/></div>
         	 		</div>
                    <div className="row">
                        <div className="col-md-2">Card number:  </div>
                        <div className="col-md-3 mt-2"><input type="text" name="cardnumber"/></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">Expiration date:</div>
                        <div className="col-md-3 mt-2"><input type="text" name="lastname"/></div>
                    </div>
          			<input className="btn-primary mt-2" type="submit" value="Submit"/>		
                </form> 
			</div>
			)
	}
}

export default checkOutInfo