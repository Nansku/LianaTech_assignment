import React from "react";

const CompanyNumbers = () => {
    return (
        <section class="container-fluid p-0">
            <div class="row trio_num">
                <div class="col-6 col-md-2 text-center trio_num_single">
                    <span class="material-icons">business_center</span>               
                </div>

                <div class="col-6 col-md-2 trio_num_single">
                    <h1 class="trio_num_header" id="value1" ></h1>
                    <p>Clients</p>
                </div>

                <div class="col-6 col-md-2 text-center trio_num_single">
                    <span class="material-icons">face</span>
                </div>

                <div class="col-6 col-md-2 trio_num_single">
                    <h1 class="trio_num_header" id="value2" ></h1>
                    <p>Employees</p>
                </div>

                <div class="col-6 col-md-2 text-center trio_num_single">
                    <span class="material-icons">public</span>
                </div>

                <div class="col-6 col-md-2 trio_num_single">
                    <h1 class="trio_num_header" id="value3"></h1>
                    <p>Daily users</p> 
                </div>
            </div>
        </section>
    )
}

export default CompanyNumbers;