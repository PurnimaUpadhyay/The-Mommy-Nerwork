// Wait for the DOM to be ready
$(function() {
             function recaptchaCallback() {
                $("#hiddenRecaptcha").valid()
            }

            $.validator.addMethod("lettersonly", function(value, element) {
                return this.optional(element) || /^[a-z]+$/i.test(value);
            }, "Letters only please");
            // Initialize form validation on the registration form.
            // It has the name attribute "registration"
            $("#signup").validate({
                // Specify validation rules
                rules: {
                    // The key name on the left side is the name attribute
                    // of an input field. Validation rules are defined
                    // on the right side
                    fname: {
                        // required: true,
                        // lettersonly: true
                    },
                    lname: {
                        required: true,
                        lettersonly: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    password_confirmation: {
                        equalTo: '#password'
                    },
                    phone_full: {
                        required: true,
                        digits: true
                    },
                    companyname: "required",
                    address: "required",
                    city: "required",
                    state: "required",
                    country: "required",
                    pincode: {
                        required: true,
                        digits: true
                    }
                },

                // Specify validation error messages
                messages: {
                    fname: {
                        required: "Please Enter Your Firstname",
                        lettersonly: "Please Enter Only Letters"
                    },
                    lname: {
                        required: "Please Enter Your Lastname",
                        lettersonly: "Please Enter Only Letters"
                    },
                    password: {
                        required: "Please Provide a Password",
                        minlength: "Your Password Must be at Least 5 Characters Long"
                    },
                    email: "Please Enter a Valid Email Address"
                },
                // Make sure the form is submitted to the destination defined
                // in the "action" attribute of the form when valid
                submitHandler: function(form) {
                    form.submit();
                }
            });

            $("#registration").validate({

                rules: {

                    contact_name: {
                        required: true,
                        lettersonly: true
                    },
                    emailid: {
                        required: true,
                        email: true
                    },
                    mobileno: {
                        required: true,
                        digits: true,
                        minlength: 10,
                        maxlength: 10
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    contact_name: {
                        required: "Please Enter Your Name",
                        lettersonly: "Please Enter Only Letters"
                    },
                    emailid: {
                        required: "Please Enter Your Email Address",
                        email: "Please Enter a Valid Email Address"
                    },
                    mobileno: {
                        minlength: "Enter 10 Digit Number",
                        maxlength: "Enter 10 Digit Number"
                    },
                    message: {
                        required: "Please Enter Your Message"
                    }
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });

            $("#career-form-id").validate({

                rules: {

                    name: {
                        required: true,
                        lettersonly: true
                    },
                    career_email: {
                        required: true,
                        email: true
                    },
                    phone_no: {
                        required: true,
                        digits: true,
                        minlength: 10,
                        maxlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Please Enter Your Name",
                        lettersonly: "Please Enter Only Letters"
                    },
                    career_email: {
                        required: "Please Enter Your Email Address",
                        email: "Please Enter a Valid Email Address"
                    },
                    phone_no: {
                        minlength: "Enter 10 Digit Number",
                        maxlength: "Enter 10 Digit Number"
                    }
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });


            $("#contact").validate({

                rules: {
                
                    fname: {
                        required: true,

                        
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    fphone : {
                        required: true,                        
                    },
                    age:{
                        required: true

                    },
                    hiddenRecaptcha: {
                        required: function() {
                            return "" == grecaptcha.getResponse()
                        }
                        
                    }

                    
                },
                messages: {

                    fname: {
                        required: "Please Enter Your Name",
                    },
                    age: {
                        required: "Please Enter Your Age",
                    },
                    fphone : {
                        required: "Please Enter Your Phone",
                    },               
                    email: {
                        required: "Please Enter Your Email Address",
                        email: "Please Enter a Valid Email Address"
                    },
                    hiddenRecaptcha : {
                        required: "Please Enter Your Phone",
                    }
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });


            $("#contact_us").validate({

                rules: {
                
                    name: {
                        required: true,   
                    },
                    contact: {
                        required: true,   
                    },
                    message: {
                       required: true,
                    },
                    email: {
                        required: true,
                        email: true
                    }
              
                },
                messages: {

                    name: {
                        required: "Please Enter Your Name",
                    },
                    contact: {
                        required: "Please Enter Your Contact",
                    },
                    message : {
                        required: "Please Enter Message",
                    },               
                    email: {
                        required: "Please Enter Your Email Address",
                        email: "Please Enter a Valid Email Address"
                    }
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });


            


});

              
