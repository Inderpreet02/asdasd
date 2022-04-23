import React from 'react'
import "./CancerForm.css"

const CancerForm = () => {
  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for CANCER prediction</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Full Name</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
		<div class="form-control">
			<label for="username">Radius_mean</label>
			<input type="email"  id="email" autocomplete="off" />
			
		</div>
		<div class="form-control">
			<label for="username">Texture_mean </label>
			<input type="password"  id="password" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Perimeter_mean :</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Area_mean :</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>

		<div class="form-control">
			<label for="username">Smoothness_mean :</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Compactness_mean:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Concavity_mean:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Concave points_mean:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Symmetry_mean:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>

		<div class="form-control">
			<label for="username">Fractal_dimension_mean:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Radius_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Texture_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Perimeter_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Area_se:</label>
			<input type="password" id="password2" autocomplete="off"/>
			
		</div>

		<div class="form-control">
			<label for="username">Smoothness_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Compactness_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Concavity_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Concave points_se:</label>
			<input type="password" id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Symmetry_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>

		<div class="form-control">
			<label for="username">Fractal_dimension_se:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Radius_worst:</label>
			<input type="password" id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Texture_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Perimeter_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Area_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>

		<div class="form-control">
			<label for="username">Smoothness_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Compactness_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Concavity_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Concave points_worst:</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Symmetry_worst :</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>
		<div class="form-control">
			<label for="username">Fractal_dimension_worst :</label>
			<input type="password"  id="password2" autocomplete="off"/>
			
		</div>

		<button>SUBMIT</button>
	</form>
</div>


  )
}

export default CancerForm