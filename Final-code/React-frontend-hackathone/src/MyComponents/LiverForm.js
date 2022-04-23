import React from 'react'
import "./CancerForm.css"

const LiverForm = () => {
  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for LIVER DISEASE prediction</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Full Name:</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Age :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Gender :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Total_Bilirubin :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Direct_Bilirubin :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Alkaline_Phosphotase :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Alamine_Aminotransferase :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Aspartate_Amino<br/>transferase :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Total_Proteins :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div> 
        <div class="form-control">
			<label for="username">Albumin :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div> 
        <div class="form-control">
			<label for="username">Albumin_and_<br/>Globulin_Ratio:</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>   

<button>SUBMIT</button>
</form>
</div>
)
}

export default LiverForm