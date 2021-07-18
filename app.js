class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
                FirstName:"",
                LastName:"",
                UserName:"",
                password:"",
                confirmPassword:""
        };
        this.eyeIcon=true;
        this.inputChange=this.inputChange.bind(this);
        this.finalFormSubmit=this.finalFormSubmit.bind(this);
        this.keyupValid=this.keyupValid.bind(this);
        this.viewPasswordInput=this.viewPasswordInput.bind(this);
    }

    inputChange(event)
    {
        const {name,value}=event.target;
        this.setState({
            // [event.target.name]:event.target.value
            [name]:value
        });
    }

    keyupValid(event)
    {
        let lookClass = event.target.classList;
        let styleElement=event.target;
        if(lookClass == "firstname")
        {
            if(event.target.value == "")
            {
                styleElement.style.borderColor="red";
                document.querySelector('.error.first-name').style.display="block";
            }
            else
            {
                styleElement.style.borderColor="black";
                document.querySelector('.error.first-name').style.display="none";
            }
        }
        else if(lookClass == "lastname")
        {
            if(event.target.value == "")
            {
                styleElement.style.borderColor="red";
                document.querySelector('.error.last-name').style.display="block";
            }
            else
            {
                styleElement.style.borderColor="black";
                document.querySelector('.error.last-name').style.display="none";
            }
        }
        else if(lookClass == "username")
        {
            if(event.target.value == "")
            {
                styleElement.style.borderColor="red";
                document.querySelector('.error.user-name').style.display="block";
            }
            else
            {
                styleElement.style.borderColor="black";
                document.querySelector('.error.user-name').style.display="none";
            }
        }
        else if(lookClass == "paswd")
        {
            if(event.target.value == "")
            {
                styleElement.style.borderColor="red";
                document.querySelector('.error.password-one').style.display="block";
            }
            else
            {
                styleElement.style.borderColor="black";
                document.querySelector('.error.password-one').style.display="none";
            }
            if(this.state.password == this.state.confirmPassword)
            {
                document.querySelector('.paswd-re').style.borderColor="black";
                document.querySelector('.error.password-config').style.display="none";
            }
        }
        else
        {
            if(this.state.password != this.state.confirmPassword && this.state.password == "")
            {
                document.querySelector('.paswd').style.borderColor="red";
                document.querySelector('.error.password-one').style.display="block";
            }
            else 
            {
                document.querySelector('.paswd').style.borderColor="black";
                document.querySelector('.error.password-one').style.display="none";
            }

            if(this.state.password != this.state.confirmPassword)
            {
                styleElement.style.borderColor="red";
                document.querySelector('.error.password-config').style.display="block";
            }
            else
            {
                styleElement.style.borderColor="black";
                document.querySelector('.error.password-config').style.display="none";
            }
        }
    }

    finalFormSubmit(e)
    {
        if(this.state.FirstName != "" && this.state.LastName != "" && this.state.UserName != "" && this.state.password != "" && this.state.confirmPassword != "")
        {
            document.querySelector('.error.empty').style.display="none";        
            alert("Validation Completed");
        }
        else
        {
            document.querySelector('.error.empty').style.display="block";
        }

        e.preventDefault();
    }

    viewPasswordInput(e)
    {
        let eyeIcons=document.querySelectorAll('span.fas');
        if(this.eyeIcon)
        {
            document.querySelector('.paswd').type="text";
            document.querySelector('.paswd-re').type="text";
            for(let i=0;i<eyeIcons.length;i++)
            {
                eyeIcons[i].classList.remove("fa-eye");
                setTimeout(()=>eyeIcons[i].classList.add("fa-eye-slash"),13);
            }
            this.eyeIcon=false;
        }
        else
        {
            document.querySelector('.paswd').type="password";
            document.querySelector('.paswd-re').type="password";
            for(let i=0;i<eyeIcons.length;i++)
            {
                eyeIcons[i].classList.remove("fa-eye-slash");
                setTimeout(()=>eyeIcons[i].classList.add("fa-eye"),13);
            }   
            this.eyeIcon=true;
        };
    }

    render(){
        return(
            <div className="form-opt">
                <form method="POST" onSubmit={this.finalFormSubmit} >
                    <h1>Sign Up </h1>
                    <input type="text" name="FirstName" value={this.state.FirstName} className="firstname" placeholder="First Name" onChange={this.inputChange} onKeyUp={this.keyupValid} />
                    <div className="error-msg"><sub className="error first-name">Field is Empty</sub></div>
                    <input type="text" name="LastName" value={this.state.LastName} className="lastname" placeholder="Last Name" onChange={this.inputChange} onKeyUp={this.keyupValid} />
                    <div className="error-msg"><sub className="error last-name">Field is Empty</sub></div>
                    <input type="text" name="UserName" value={this.state.UserName} className="username" placeholder="User Name" onChange={this.inputChange} onKeyUp={this.keyupValid} />
                    <div className="error-msg"><sub className="error user-name">Field is Empty</sub></div>
                    <input type="password" name="password" value={this.state.password} className="paswd" placeholder="Password" onChange={this.inputChange} onKeyUp={this.keyupValid} /><span onClick={this.viewPasswordInput} className="fas fa-eye"></span>
                    <div className="error-msg"><sub className="error password-one">Field is Empty</sub></div>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} className="paswd-re" placeholder="Re-type Password" onChange={this.inputChange} onKeyUp={this.keyupValid}/><span onClick={this.viewPasswordInput} className="fas fa-eye"></span>
                    <div className="error-msg"><sub className="error password-config">Passwords need to be match</sub></div>
                    <button type="submit" name="formSubmit">Submit</button>
                    <h3 class="error empty">Fields Are Empty</h3>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
