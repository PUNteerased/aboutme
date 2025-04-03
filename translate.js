
var th = {
    button: "ไทย",
    pun: "ปุณณ์",
    iam: "ผมคือ ",
    menu_home: "หน้าแรก",
    menu_about: "เกี่ยวกับ",
    menu_resume: "ประวัติย่อ",
    menu_education: "การศึกษา",
    menu_portfolio: "ผลงาน",
    menu_contact: "ติดต่อ",
    hname: "ชื่อ: ",
    name: "ธีระเศรษฐ์ อุ่นต๊ะ",
    about: "เกี่ยวกับ",
    aboutme: "เกี่ยวกับฉัน",
    hbirthday: "วันเกิด",
    birthday: "4 พฤษภาคม 2553",
    hello: "สวัสดี!",
    hresume: "ประวัติย่อ",
    resume: "ประวัติย่อ",
    kindergarten: "อนุบาล",
    abst: "โรงเรียนอนุบาลสุโขทัย",
    abst: "โรงเรียนอนุบาลสุโขทัย",
    success: "สำเร็จ",
    makebyme: "สร้างโดยฉัน",
    back: "กลับ",
  };
  var en = {
    button: "Eng",
    pun: "Pun",
    iam: "I'm ",
    menu_home: "Home",
    menu_about: "About",
    menu_resume: "Resume",
    menu_education: "Education",
    menu_portfolio: "Portfolio",
    menu_contact: "Contact",
    hname: "Name:",
    name: "Teerased Unta",
    about: "About",
    aboutme: "About Me",
    hbirthday: "Date of birth:",
    birthday: "May 04, 2010",
    hello: "Hello!",
    resume: "Resume",
    hresume: "Resume",
    kindergarten: "Kindergarten",
    abst: "ANUBANSUKHOTHAI",
    abst: "ANUBANSUKHOTHAI",
    success: "Success",
    makebyme: "Make by Me",
    back: "Back",
  };
  
  function renderlang() {
    if (!localStorage.lang) {
      localStorage.setItem("lang", "en");
    } else {
      $("#pun").text(settext("pun"));
      $("#menu_home").text(settext("menu_home"));
      $("#menu_about").text(settext("menu_about"));
      $("#menu_resume").text(settext("menu_resume"));
      $("#menu_education").text(settext("menu_education"));
      $("#menu_portfolio").text(settext("menu_portfolio"));
      $("#menu_contact").text(settext("menu_contact"));
      $("#languageTH").text(settext("languageTH"));
      $("#languageEN").text(settext("languageEN"));
      $("#hname").text(settext("hname"));
      $("#name").text(settext("name"));
      $("#about").text(settext("about"));
      $("#aboutme").text(settext("aboutme"));
      $("#hbirthday").text(settext("hbirthday"));
      $("#birthday").text(settext("birthday"));
      $("#hello").text(settext("hello"));
      $("#hresume").text(settext("hresume"));
      $("#resume").text(settext("resume"));
      $("#kindergarten").text(settext("kindergarten"));
      $("#abst").text(settext("abst"));
      $("#abst").text(settext("abst"));
      $("#success").text(settext("success"));
      $("#makebyme").text(settext("makebyme"));
      $("#back").text(settext("back"));
    }
  }
  
  function settext(key) {
    if (localStorage.lang == "en") {
      return en[key];
    } else {
      return th[key];
    }
  }
  
  function togglelang() {
    if (localStorage.lang == "th") localStorage.setItem("lang", "en");
    else if (localStorage.lang == "en") localStorage.setItem("lang", "th");
  
    renderlang();
    return "now language: " + localStorage.lang;
  }
  
  renderlang()
  