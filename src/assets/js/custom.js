$(document).ready(function () {
  var imgWidth = $(".slideshow__image").width(),
    $slider = $(".slideshow__container"),
    $nextButton = $(".slideshow__next"),
    $prevButton = $(".slideshow__prev"),
    closeBlock = $(".slideshow__block"),
    slideInBlock = ".slideshow__slidein",
    slideNext = $(".slideshow__forward").find(".slideshow__slidein"),
    slideBack = $(".slideshow__back").find(".slideshow__slidein"),
    clickCount = 0,
    clickCountImg = 1;

  $nextButton.click(function () {
    var circle = $(this).find(".circle"),
      line = $(this).find(".line"),
      block = $(this).parent().find(".slideshow__block"),
      slideIn = $(this).parent().find(".slideshow__slidein"),
      tl = new TimelineMax({
        onComplete: tlComplete,
      }),
      tl2 = new TimelineMax();

    tl.set(circle, {
      x: 15,
      y: 15,
      scale: 0,
    })
      .set(
        slideIn,
        {
          right: -350,
          opacity: 1,
        },
        0
      )
      .set(
        block,
        {
          right: 270,
          opacity: 0,
        },
        0
      )
      .set(
        $nextButton,
        {
          zIndex: 1,
        },
        0
      )
      .to(
        circle,
        0.5,
        {
          scale: 1,
          transformOrigin: "50%, 50%",
          opacity: 1,
        },
        0
      )
      .to(circle, 0.3, {
        opacity: 0,
      })
      .to(
        line,
        0.3,
        {
          scale: 0,
          transformOrigin: "50%, 50%",
        },
        0
      )
      .set(circle, {
        scale: 0,
        opacity: 0,
      });

    function tlComplete() {
      tl2
        .to(slideIn, 0.5, {
          right: 0,
        })
        .to(
          block,
          0.5,
          {
            right: 350,
            opacity: 1,
          },
          0
        );
    }

    function getLineback() {
      TweenMax.to(line, 0.3, {
        scale: 1,
        opacity: 1,
        delay: 0.5,
      });
    }

    closeBlock.click(function () {
      tl2.reverse();
    });

    closeBlock.click(getLineback);

    $prevButton.click(function () {
      tl2.reverse();
    });

    $prevButton.click(getLineback);
  });

  $prevButton.click(function () {
    var circle = $(this).find(".circle"),
      line = $(this).find(".line"),
      block = $(this).parent().find(".slideshow__block"),
      slideIn = $(this).parent().find(".slideshow__slidein"),
      tl = new TimelineMax({
        onComplete: tlComplete,
      }),
      tl2 = new TimelineMax();

    tl.set(circle, {
      x: 15,
      y: 15,
      scale: 0,
    })
      .set(
        slideIn,
        {
          left: -350,
          opacity: 1,
        },
        0
      )
      .set(
        block,
        {
          left: 270,
          opacity: 0,
        },
        0
      )
      .set(
        $prevButton,
        {
          zIndex: 1,
        },
        0
      )
      .to(
        circle,
        0.5,
        {
          scale: 1,
          transformOrigin: "50%, 50%",
          opacity: 1,
        },
        0
      )
      .to(circle, 0.3, {
        opacity: 0,
      })
      .to(
        line,
        0.3,
        {
          scale: 0,
          transformOrigin: "50%, 50%",
        },
        0
      )
      .set(circle, {
        scale: 0,
        opacity: 0,
      });

    function tlComplete() {
      tl2
        .to(slideIn, 0.3, {
          left: 0,
        })
        .to(
          block,
          0.3,
          {
            left: 350,
            opacity: 1,
          },
          0
        );
    }

    function getLineback() {
      TweenMax.to(line, 0.3, {
        scale: 1,
        opacity: 1,
        delay: 0.5,
      });
    }

    closeBlock.click(function () {
      tl2.reverse();
    });

    closeBlock.click(getLineback);

    $nextButton.click(function () {
      tl2.reverse();
    });

    $nextButton.click(getLineback);
  });

  slideNext.click(function () {
    clickCount++;
    clickCountImg++;

    var clickCountImgPrev = clickCountImg - 2;
    var firstImage = $(".slideshow__container li img:eq(0)"),
      imagePrev = $(
        ".slideshow__container li img:eq(" + clickCountImgPrev + ")"
      ),
      image = $(".slideshow__container li img:eq(" + clickCountImg + ")");

    if (clickCount > 3) {
      clickCount = 0;
    }
    if (clickCountImg > 3) {
      clickCountImg = 0;
      firstImage.clone().appendTo(slideNext);
    }

    TweenMax.to($slider, 0.5, {
      x: -clickCount * imgWidth,
    });

    slideNext.children("img").remove();
    slideBack.children("img").remove();
    image.clone().appendTo(slideNext);
    imagePrev.clone().appendTo(slideBack);
    console.log(image);

    if (clickCountImg == 0) {
      firstImage.clone().appendTo(slideNext);
    }
  });

  slideBack.click(function () {
    clickCount--;
    clickCountImg--;

    var clickCountImgPrev = clickCountImg - 2,
      firstImage = $(".slideshow__container li img:eq(0)"),
      imagePrev = $(
        ".slideshow__container li img:eq(" + clickCountImgPrev + ")"
      ),
      image = $(".slideshow__container li img:eq(" + clickCountImg + ")");

    if (clickCount < 0) {
      clickCount = 3;
    }

    if (clickCountImg < 0) {
      clickCountImg = 3;
    }

    TweenMax.to($slider, 0.5, {
      x: -clickCount * imgWidth,
    });

    slideNext.children("img").remove();
    slideBack.children("img").remove();

    imagePrev.clone().appendTo(slideBack);
    image.clone().appendTo(slideNext);
  });
});

// The js of login page
// 1: validate e-mail
function ValidateEmail() {
  var strength1 = document.getElementById("strength1");
  var pwd = document.getElementById("mailid");
  var validmail = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

  if (pwd.value.length == 0) {
    strength1.innerHTML = document.getElementById("mailid").style.border =
      "3px solid cyan";
  } else if (validmail.test(pwd.value)) {
    // return (true)
    strength1.innerHTML = document.getElementById("mailid").style.border =
      "3px solid lightgreen";
  } else {
    // alert("You have entered an invalid email address!")
    // return (false)
    strength1.innerHTML = document.getElementById("mailid").style.border =
      "3px solid red";
  }
}

//2 password show
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  var y = document.getElementById("myInput1");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  var y = document.getElementById("myInput1");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

function passwordChanged() {
  var strength = document.getElementById("strength");
  var strongRegex = new RegExp(
    "^(?=.{8,16})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pwd = document.getElementById("myInput");
  if (pwd.value.length == 0) {
    strength.innerHTML = document.getElementById("myInput").style.border =
      "5px solid cyan";
  } else if (false == enoughRegex.test(pwd.value)) {
    strength.innerHTML = document.getElementById("myInput").style.border =
      "5px solid purple";
  } else if (strongRegex.test(pwd.value)) {
    strength.innerHTML = document.getElementById("myInput").style.border =
      "5px solid lightgreen";
  } else if (mediumRegex.test(pwd.value)) {
    strength.innerHTML = document.getElementById("myInput").style.border =
      "5px solid orange";
  } else {
    strength.innerHTML = document.getElementById("myInput").style.border =
      "5px solid red";
  }
}

function passwordChanged1() {
  var strength = document.getElementById("strength");
  var strongRegex = new RegExp(
    "^(?=.{8,16})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pwd = document.getElementById("myInput1");
  if (pwd.value.length == 0) {
    strength.innerHTML = document.getElementById("myInput1").style.border =
      "5px solid cyan";
  } else if (false == enoughRegex.test(pwd.value)) {
    strength.innerHTML = document.getElementById("myInput1").style.border =
      "5px solid purple";
  } else if (strongRegex.test(pwd.value)) {
    strength.innerHTML = document.getElementById("myInput1").style.border =
      "5px solid lightgreen";
  } else if (mediumRegex.test(pwd.value)) {
    strength.innerHTML = document.getElementById("myInput1").style.border =
      "5px solid orange";
  } else {
    strength.innerHTML = document.getElementById("myInput1").style.border =
      "5px solid red";
  }
}

function ValidateEmail() {
  var strength1 = document.getElementById("strength1");
  var pwd = document.getElementById("mailid");
  var validmail = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

  if (pwd.value.length == 0) {
    strength1.innerHTML = document.getElementById("mailid").style.border =
      "5px solid cyan";
  } else if (validmail.test(pwd.value)) {
    // return (true)
    strength1.innerHTML = document.getElementById("mailid").style.border =
      "5px solid lightgreen";
  } else {
    // alert("You have entered an invalid email address!")
    // return (false)
    strength1.innerHTML = document.getElementById("mailid").style.border =
      "5px solid red";
  }
}
