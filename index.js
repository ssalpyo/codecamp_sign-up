// 핸드폰 번호 입력 포커스 이동
const changePhone1 = () => {
	const phone1 = document.getElementById("phone1").value
	if(phone1.length === 3){
			document.getElementById("phone2").focus();
	}
}
const changePhone2 = () => {
	const phone2 = document.getElementById("phone2").value
	if(phone2.length === 4){
			document.getElementById("phone3").focus();
	}
}
const changePhone3 = () => {
	const phone3 = document.getElementById("phone3").value
	if(phone3.length === 4){
		document.getElementById("sendToken").focus();
		document.getElementById("sendToken").setAttribute("style","background-color:#FFF; color:#0068FF; border-color:#0068FF;")
		document.getElementById("sendToken").disabled = false;
	}
}

// 버튼 초기화
const initButton = () => {
	document.getElementById("sendToken").disabled = true;
	document.getElementById("certification").disabled = true;
	document.getElementById("token").innerText = "000000";
	document.getElementById("timer").innerText = "03:00";
	document.getElementById("sendToken").setAttribute("style","background-color:none;")
	document.getElementById("certification").setAttribute("style","background-color:none;")
}

// 6자리 토큰 생성
const getToken = () => {
	const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

	document.getElementById("token").innerText = token;
}

// 타이머
const timeLimit = () => {
	let processID = -1;
	let time = 180;

	processID = setInterval(function () {
		if (time < 0 || document.getElementById("certification").disabled) {
			clearInterval(processID);
			initButton();
			if (time < 0){
				alert("인증 실패");
				document.getElementById("phone1").value = null;
				document.getElementById("phone2").value = null;
				document.getElementById("phone3").value = null;
			}
			return;
		}
		let mm = String(Math.floor(time / 60)).padStart(2, "0");
		let ss = String(time % 60).padStart(2, "0");
		let result = mm + ":" + ss;
		document.getElementById("timer").innerText = result;
		time--;
	}, 100);
}

// 인증번호 전송 버튼
const sendToken = () => {
	getToken();
	timeLimit();
	document.getElementById("sendToken").disabled = true;
	document.getElementById("certification").disabled = false;
	document.getElementById("certification").setAttribute("style","background-color:#0068FF; color:#FFF;")
}

// 인증확인 버튼
const checkCertification = () => {
alert("인증이 완료되었습니다.");
initButton();
document.getElementById("certification").innerText="인증완료"
document.getElementById("signUpButton").disabled = false;
document.getElementById("signUpButton").setAttribute("style","background-color:#FFF; color:#0068FF; border-color:#0068FF;")
}

// 가입하기 버튼
const signUpCheck = () => {
	let email = document.getElementById("email").value
	let name = document.getElementById("name").value
	let password = document.getElementById("password").value
	let passwordCheck = document.getElementById("passwordCheck").value
	let area = document.getElementById("area").value
	let genderMan = document.getElementById("genderMan").checked
	let genderWoman = document.getElementById("genderWoman").checked
	let check = true;

	// 이메일확인
	if (email.includes('@')) {
		let emailId = email.split('@')[0]
		let emailServer = email.split('@')[1]

		if (emailId === "" || emailServer === "") {
			document.getElementById("emailError").innerText="이메일이 올바르지 않습니다."
			check = false
		} else {
			document.getElementById("emailError").innerText=""
		}
	} else {
		document.getElementById("emailError").innerText="이메일이 올바르지 않습니다."
		check = false
	}

	// 이름확인
	if (name==="") {
		document.getElementById("nameError").innerText="이름이 올바르지 않습니다."
		check = false
	} else {
		document.getElementById("nameError").innerText=""
	}


	// 비밀번호 확인
	if (password !== passwordCheck) {
		document.getElementById("passwordError").innerText=""
		document.getElementById("passwordCheckError").innerText="비밀번호가 동일하지 않습니다."
		check = false
	} else {
		document.getElementById("passwordError").innerText=""
		document.getElementById("passwordCheckError").innerText=""
	}
	if (password==="") {
		document.getElementById("passwordError").innerText="비밀번호를 입력해주세요."
		check = false
	}
	if (passwordCheck==="") {
		document.getElementById("passwordCheckError").innerText="비밀번호를 다시 입력해주세요."
		check = false
	}


	// 지역선택 확인
	if (area === "지역을 선택하세요.") {
		document.getElementById("areaError").innerText="지역을 선택해주세요."
		check = false
	} else {
		document.getElementById("areaError").innerText=""
	}

	// 성별체크확인
	if (!genderMan && !genderWoman) {
		document.getElementById("genderError").innerText="성별을 선택해주세요."
		check = false
	} else {
		document.getElementById("genderError").innerText=""
	}

	if(check){
		document.getElementById("emailError").innerText=""
		document.getElementById("nameError").innerText=""
		document.getElementById("passwordError").innerText=""
		document.getElementById("passwordCheckError").innerText=""
		document.getElementById("areaError").innerText=""
		document.getElementById("genderError").innerText=""
		
		setTimeout(function() {
			alert("가입이 완료되었습니다.")
	},0);
	}
}