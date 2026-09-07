/* =========================================================
   ELEMENTS
========================================================= */

const sceneGift = document.getElementById("sceneGift");
const sceneFlowers = document.getElementById("sceneFlowers");
const sceneLetter = document.getElementById("sceneLetter");
const sceneFinal = document.getElementById("sceneFinal");

const giftBox = document.getElementById("giftBox");
const openGift = document.getElementById("openGift");

const flower1 = document.getElementById("flower1");
const flower2 = document.getElementById("flower2");
const flower3 = document.getElementById("flower3");

const nextLetter = document.getElementById("nextLetter");
const backFlowers = document.getElementById("backFlowers");

const finalButton = document.getElementById("finalButton");

const petalsContainer =
    document.getElementById("petals");

const starsContainer =
    document.getElementById("stars");

const toast =
    document.getElementById("toast");

const toastText =
    document.getElementById("toastText");

const letterNumber =
    document.getElementById("letterNumber");

const letterFlower =
    document.getElementById("letterFlower");

const letterEyebrow =
    document.getElementById("letterEyebrow");

const letterTitle =
    document.getElementById("letterTitle");

const letterContent =
    document.getElementById("letterContent");

const letterFooterText =
    document.getElementById("letterFooterText");

const nextLetterText =
    document.getElementById("nextLetterText");

const progressDots =
    document.querySelectorAll(".progress-dot");


/* =========================================================
   STATE
========================================================= */

let currentLetter = 1;

let openedLetters = {
    1: false,
    2: false,
    3: false
};

let giftOpened = false;


/* =========================================================
   LETTER DATA
========================================================= */

const letters = {

    1: {

        number: "01",

        flower: "🌷",

        eyebrow:
            "MỘT CHÚT BÌNH YÊN",

        title:
            "Không sao nếu hôm nay<br> bạn chưa biết phải đi đâu",

        content: `
            <p>
                Nếu hôm nay bạn cảm thấy mình đang
                <strong>mất phương hướng</strong>,
                thì cũng không sao cả.
            </p>

            <p>
                Có những ngày mình thức dậy nhưng
                chẳng biết nên bắt đầu từ đâu,
                cũng chẳng biết điều gì mới thật sự
                là thứ mình muốn.
            </p>

            <p>
                Nhưng bạn biết không...
                <span class="emphasis">
                    không phải cứ chưa tìm được đường
                    thì có nghĩa là mình đang đi sai.
                </span>
            </p>

            <div class="letter-quote">

                <span>“</span>

                <p>
                    Cứ đi chậm một chút cũng được,<br>
                    miễn là bạn đừng bỏ cuộc với chính mình.
                </p>

            </div>
        `,

        footer:
            "Mình chỉ muốn bạn nhớ điều này.",

        next:
            "Mở lá thư tiếp theo"

    },


    2: {

        number: "02",

        flower: "🌼",

        eyebrow:
            "MỘT CHÚT HY VỌNG",

        title:
            "Rồi mọi chuyện<br> sẽ từ từ tốt lên",

        content: `
            <p>
                Bạn không cần phải trở nên mạnh mẽ
                trong một ngày.
            </p>

            <p>
                Mệt thì nghỉ một chút.
                Buồn thì cứ buồn.
                Không biết phải làm gì thì
                cứ cho bản thân thêm một chút thời gian.
            </p>

            <p>
                Điều quan trọng nhất là
                <strong>
                    đừng tự trách mình
                </strong>
                chỉ vì bạn chưa tìm được câu trả lời.
            </p>

            <div class="letter-quote">

                <span>✦</span>

                <p>
                    Ngày hôm nay có thể chưa đẹp,<br>
                    nhưng điều đó không có nghĩa<br>
                    ngày mai cũng sẽ như vậy.
                </p>

            </div>

            <p style="margin-top:18px;text-align:center;">
                Và nếu có lúc bạn cảm thấy
                chẳng biết phải nói với ai...
            </p>

            <p style="text-align:center;margin-bottom:0;">
                <span class="emphasis">
                    thì cứ nói với mình.
                </span>
            </p>
        `,

        footer:
            "Bạn không cần phải ổn ngay lập tức.",

        next:
            "Mở điều cuối cùng"

    },


    3: {

        number: "03",

        flower: "🌸",

        eyebrow:
            "MỘT LỜI HỨA",

        title:
            "Mình vẫn còn<br> một lời hứa với bạn",

        content: `
            <p>
                À mà này...
            </p>

            <p>
                Bạn đừng quên là
                <strong>
                    mình vẫn còn một lời hứa
                </strong>
                chưa thực hiện đâu nhé.
            </p>

            <div class="letter-quote">

                <span>💌</span>

                <p>
                    Mình sẽ sớm về Việt Nam.
                    <br><br>
                    Và mình sẽ chở bạn đi ăn chè. 🍧
                </p>

            </div>

            <p style="margin-top:20px;">
                Hôm đó bạn chỉ cần chọn
                món chè mà bạn thích.
            </p>

            <p style="margin-bottom:0;">
                Còn chuyện chở bạn đi...
                <span class="emphasis">
                    để mình lo.
                </span>
            </p>
        `,

        footer:
            "Vậy nên nhớ giữ bụng cho một buổi ăn chè nhé. 🍧",

        next:
            "Mở món quà cuối cùng"

    }

};


/* =========================================================
   CREATE STARS
========================================================= */

function createStars() {

    const count = 65;

    for (let i = 0; i < count; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.setProperty(
            "--duration",
            `${2 + Math.random() * 4}s`
        );

        star.style.setProperty(
            "--delay",
            `${Math.random() * -5}s`
        );

        const size =
            1 + Math.random() * 2;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        starsContainer.appendChild(star);
    }
}


createStars();


/* =========================================================
   CHANGE SCENE
========================================================= */

function changeScene(fromScene, toScene) {

    fromScene.classList.remove("active");

    setTimeout(() => {

        toScene.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 180);
}


/* =========================================================
   SHOW TOAST
========================================================= */

let toastTimer;

function showToast(message) {

    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);
}


/* =========================================================
   OPEN GIFT
========================================================= */

openGift.addEventListener("click", openGiftBox);

giftBox.addEventListener("click", openGiftBox);


function openGiftBox() {

    if (giftOpened) return;

    giftOpened = true;

    giftBox.classList.add("opened");

    openGift.style.opacity = "0";

    openGift.style.pointerEvents = "none";

    createPetalBurst();

    setTimeout(() => {

        changeScene(
            sceneGift,
            sceneFlowers
        );

    }, 1250);

}


/* =========================================================
   FLOWER 1
========================================================= */

flower1.addEventListener("click", () => {

    openLetter(1);

});


/* =========================================================
   FLOWER 2
========================================================= */

flower2.addEventListener("click", () => {

    if (flower2.classList.contains("locked")) {

        showToast(
            "Hãy mở bông hoa đầu tiên trước nhé 🌷"
        );

        return;
    }

    openLetter(2);

});


/* =========================================================
   FLOWER 3
========================================================= */

flower3.addEventListener("click", () => {

    if (flower3.classList.contains("locked")) {

        showToast(
            "Còn một lá thư nữa mới đến đây 🌼"
        );

        return;
    }

    openLetter(3);

});


/* =========================================================
   OPEN LETTER
========================================================= */

function openLetter(number) {

    currentLetter = number;

    const data = letters[number];

    openedLetters[number] = true;

    updateLetter(data);

    createPetalBurst();

    changeScene(
        sceneFlowers,
        sceneLetter
    );

}


/* =========================================================
   UPDATE LETTER
========================================================= */

function updateLetter(data) {

    letterNumber.textContent =
        data.number;

    letterFlower.textContent =
        data.flower;

    letterEyebrow.textContent =
        data.eyebrow;

    letterTitle.innerHTML =
        data.title;

    letterContent.innerHTML =
        data.content;

    letterFooterText.textContent =
        data.footer;

    nextLetterText.textContent =
        data.next;


    /*
       Small re-animation
    */

    letterContent.style.opacity = "0";
    letterTitle.style.opacity = "0";

    setTimeout(() => {

        letterContent.style.transition =
            "opacity .5s ease";

        letterTitle.style.transition =
            "opacity .5s ease";

        letterContent.style.opacity = "1";
        letterTitle.style.opacity = "1";

    }, 120);


    updateProgress();

}


/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgress() {

    progressDots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index < currentLetter
            );

        }
    );

}


/* =========================================================
   NEXT LETTER
========================================================= */

nextLetter.addEventListener(
    "click",
    () => {

        if (currentLetter < 3) {

            const next = currentLetter + 1;

            currentLetter = next;

            updateLetter(
                letters[next]
            );

            /*
               Go back to flowers first
               so the user sees the next flower.
            */

            changeScene(
                sceneLetter,
                sceneFlowers
            );

            setTimeout(() => {

                unlockFlower(next);

            }, 500);

        } else {

            /*
               Final reveal
            */

            createBigPetalBurst();

            changeScene(
                sceneLetter,
                sceneFinal
            );

        }

    }
);


/* =========================================================
   UNLOCK FLOWER
========================================================= */

function unlockFlower(number) {

    if (number === 2) {

        flower2.classList.remove(
            "locked"
        );

        const lock =
            flower2.querySelector(
                ".flower-lock"
            );

        if (lock) {
            lock.textContent = "✦";
        }

        flower2.querySelector(
            "small"
        ).textContent =
            "Mở lá thư";

    }


    if (number === 3) {

        flower3.classList.remove(
            "locked"
        );

        const lock =
            flower3.querySelector(
                ".flower-lock"
            );

        if (lock) {
            lock.textContent = "✦";
        }

        flower3.querySelector(
            "small"
        ).textContent =
            "Mở lá thư";

    }

}


/* =========================================================
   BACK TO FLOWERS
========================================================= */

backFlowers.addEventListener(
    "click",
    () => {

        changeScene(
            sceneLetter,
            sceneFlowers
        );

    }
);


/* =========================================================
   PETAL BURST
========================================================= */

function createPetalBurst() {

    const symbols = [
        "🌸",
        "🌷",
        "🌼",
        "✦"
    ];

    for (let i = 0; i < 12; i++) {

        const petal =
            document.createElement("span");

        petal.className =
            "petal-falling";

        petal.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        petal.style.left =
            `${Math.random() * 100}%`;

        petal.style.setProperty(
            "--drift",
            `${(Math.random() - .5) * 220}px`
        );

        petal.style.setProperty(
            "--fall-duration",
            `${3 + Math.random() * 3}s`
        );

        petalsContainer.appendChild(
            petal
        );

        setTimeout(() => {

            petal.remove();

        }, 6500);

    }

}


/* =========================================================
   BIG PETAL BURST
========================================================= */

function createBigPetalBurst() {

    const symbols = [
        "🌸",
        "🌷",
        "🌼",
        "🌺",
        "✨",
        "💗",
        "💛"
    ];

    for (let i = 0; i < 35; i++) {

        const petal =
            document.createElement("span");

        petal.className =
            "petal-falling";

        petal.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        petal.style.left =
            `${Math.random() * 100}%`;

        petal.style.setProperty(
            "--drift",
            `${(Math.random() - .5) * 400}px`
        );

        petal.style.setProperty(
            "--fall-duration",
            `${3 + Math.random() * 4}s`
        );

        petalsContainer.appendChild(
            petal
        );

        setTimeout(() => {

            petal.remove();

        }, 7500);

    }

}


/* =========================================================
   FINAL BUTTON
========================================================= */

finalButton.addEventListener(
    "click",
    () => {

        createConfetti();

        finalButton.innerHTML =
            "<span>🌷</span> Vậy thì cười một chút nhé";

        setTimeout(() => {

            finalButton.innerHTML =
                "<span>💛</span> Hôm nay vui một chút nhé";

        }, 3200);

    }
);


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

    const symbols = [
        "💛",
        "💗",
        "🌷",
        "🌼",
        "✨",
        "🍧"
    ];

    for (let i = 0; i < 20; i++) {

        const item =
            document.createElement("span");

        item.className =
            "confetti";

        item.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            120 + Math.random() * 220;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        item.style.setProperty(
            "--x",
            `${x}px`
        );

        item.style.setProperty(
            "--y",
            `${y}px`
        );

        item.style.setProperty(
            "--rotation",
            `${Math.random() * 720 - 360}deg`
        );

        document.body.appendChild(item);

        setTimeout(() => {

            item.remove();

        }, 1900);

    }

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
           Enter / Space mở quà
        */

        if (
            !giftOpened &&
            (
                event.key === "Enter" ||
                event.key === " "
            )
        ) {

            event.preventDefault();

            openGiftBox();

        }


        /*
           Escape quay lại hoa
        */

        if (
            sceneLetter.classList.contains("active") &&
            event.key === "Escape"
        ) {

            changeScene(
                sceneLetter,
                sceneFlowers
            );

        }

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProgress();

    }
);