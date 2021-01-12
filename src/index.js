import React from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar";
import Head from "./Head";
import FoodItems from "./Food";
import food from "./food.jpg";
import gsap from "gsap";

ReactDom.render(
  <div>
    <Navbar />
    <Head />
    <FoodItems
      description1="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      foodEmoji1="🍔"
      food1="Burger"
      food2="Lobster"
      food3="Pastry"
      food4="Coffee"
      food5="Chinese"
      foodEmoji2="🦞"
      foodEmoji3="🍰"
      foodEmoji4="☕"
      foodEmoji5="🍜"
      description2="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      description3="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      description4="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      description5="lorem ipsum dolor sit amet, consectur adipiscing elit"
    />
    <h1 className="special">Specials</h1>
    <div className="carousel-container">
      <i id="prev-btn" className="fas fa-arrow-left"></i>
      <i id="next-btn" className="fas fa-arrow-right"></i>
      <div className="carousel-slide">
        <img
          id="lastClone"
          className="carousel-image"
          src={food}
          alt="food-img"
        />
        <img className="carousel-image" src={food} alt="food-img" />
        <img className="carousel-image" src={food} alt="food-img" />
        <img
          id="firstClone"
          className="carousel-image"
          src={food}
          alt="food-img"
        />
      </div>
    </div>

    <div className="intro">
      <div className="hide">
        <div class="preloader hide-text">
          <svg
            width="446"
            height="400"
            viewBox="0 0 446 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="446" height="400" fill="#E5E5E5" />
            <g id="undraw_barbecue_3x93 1">
              <rect width="446" height="400" fill="url(#paint0_linear)" />
              <path
                id="Vector"
                d="M220.907 400C342.911 400 441.815 393.585 441.815 385.672C441.815 377.759 342.911 371.344 220.907 371.344C98.9036 371.344 0 377.759 0 385.672C0 393.585 98.9036 400 220.907 400Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_2"
                d="M224.61 229.26H217.205V233.439H224.61V229.26Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_3"
                d="M239.419 229.26H232.015V233.439H239.419V229.26Z"
                fill="#3F3D56"
              />
              <g id="grills">
                <path
                  id="Vector_4"
                  d="M254.229 229.26H246.824V233.439H254.229V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_5"
                  d="M269.038 229.26H261.633V233.439H269.038V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_6"
                  d="M283.848 229.26H276.443V233.439H283.848V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_7"
                  d="M298.657 229.26H291.252V233.439H298.657V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_8"
                  d="M313.467 229.26H306.062V233.439H313.467V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_9"
                  d="M328.276 229.26H320.871V233.439H328.276V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_10"
                  d="M343.085 229.26H335.681V233.439H343.085V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_11"
                  d="M357.895 229.26H350.49V233.439H357.895V229.26Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_12"
                  d="M372.704 229.26H365.3V233.439H372.704V229.26Z"
                  fill="#3F3D56"
                />
              </g>
              <path
                id="hinge"
                d="M387.514 245.378C393.648 245.378 398.621 240.567 398.621 234.633C398.621 228.698 393.648 223.887 387.514 223.887C381.379 223.887 376.407 228.698 376.407 234.633C376.407 240.567 381.379 245.378 387.514 245.378Z"
                fill="#3F3D56"
              />
              <g id="bbq">
                <path
                  id="Vector_13"
                  d="M389.673 231.946C389.673 254.746 380.312 276.612 363.648 292.734C346.984 308.856 324.383 317.913 300.817 317.913C277.251 317.913 254.65 308.856 237.986 292.734C221.322 276.612 211.96 254.746 211.96 231.946H389.673Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_14"
                  d="M385.379 232.495L328.856 69.492C339.918 65.8935 351.605 64.4402 363.249 65.215C374.892 65.9899 386.263 68.9779 396.712 74.008C407.161 79.0381 416.482 86.0117 424.143 94.5299C431.804 103.048 437.654 112.944 441.358 123.651C441.957 125.377 442.5 127.114 442.981 128.851C448.799 149.974 446.082 172.449 435.381 191.702C424.68 210.956 406.801 225.543 385.379 232.495Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_15"
                  d="M274.592 254.333C273.774 254.333 272.989 254.648 272.41 255.208C271.832 255.768 271.507 256.527 271.507 257.318C271.507 258.11 271.832 258.869 272.41 259.429C272.989 259.989 273.774 260.303 274.592 260.303H327.659C328.477 260.303 329.262 259.989 329.841 259.429C330.419 258.869 330.744 258.11 330.744 257.318C330.744 256.527 330.419 255.768 329.841 255.208C329.262 254.648 328.477 254.333 327.659 254.333H274.592Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_16"
                  d="M374.555 387.463L363.506 387.858L323.7 305.034L333.771 300.504L374.555 387.463Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_17"
                  d="M227.078 387.463L238.127 387.858L277.934 305.034L267.862 300.504L227.078 387.463Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_18"
                  d="M346.788 339.704H255.463V345.674H346.788V339.704Z"
                  fill="#3F3D56"
                />
              </g>
              <path
                id="Vector_19"
                d="M331.115 66.4488C330.681 66.449 330.253 66.5476 329.866 66.7366C329.478 66.9256 329.142 67.1999 328.884 67.5373C328.626 67.8748 328.453 68.2661 328.379 68.6798C328.306 69.0935 328.333 69.5182 328.46 69.9197L330.801 77.3428C331.017 78.0237 331.503 78.594 332.153 78.9284C332.802 79.2627 333.563 79.3338 334.267 79.126C334.971 78.9183 335.561 78.4486 335.907 77.8202C336.253 77.1918 336.328 76.4561 336.114 75.7748L333.773 68.3517C333.598 67.8013 333.246 67.3196 332.768 66.9771C332.289 66.6346 331.71 66.4494 331.115 66.4488Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_20"
                d="M208.258 233.439C207.521 233.439 206.815 233.722 206.294 234.226C205.774 234.729 205.481 235.413 205.481 236.125C205.481 236.838 205.774 237.521 206.294 238.025C206.815 238.529 207.521 238.812 208.258 238.812H216.28C217.016 238.812 217.722 238.529 218.243 238.025C218.764 237.521 219.056 236.838 219.056 236.125C219.056 235.413 218.764 234.729 218.243 234.226C217.722 233.722 217.016 233.439 216.28 233.439H208.258Z"
                fill="#6C63FF"
              />
              <g id="patty2">
                <path
                  id="Vector_21"
                  d="M274.592 213.738H241.271C241.061 213.738 240.857 213.744 240.653 213.762C238.476 213.912 236.439 214.854 234.951 216.399C233.463 217.943 232.634 219.976 232.632 222.087C232.629 224.199 233.453 226.233 234.938 227.781C236.423 229.328 238.458 230.275 240.635 230.43C240.845 230.448 241.055 230.454 241.271 230.454H274.592C276.883 230.454 279.08 229.573 280.7 228.006C282.32 226.438 283.231 224.312 283.231 222.096C283.231 219.879 282.32 217.753 280.7 216.186C279.08 214.618 276.883 213.738 274.592 213.738Z"
                  fill="#FF6584"
                />
                <path
                  id="Vector_22"
                  opacity="0.2"
                  d="M237.914 229.791C243.591 229.087 248.058 222.155 248.058 213.738H246.824C246.824 221.97 242.394 228.663 236.951 228.663V229.331L237.914 229.791Z"
                  fill="black"
                />
                <path
                  id="Vector_23"
                  opacity="0.2"
                  d="M249.909 229.857V228.663C255.353 228.663 259.782 221.967 259.782 213.738H261.016C261.016 222.626 256.034 229.857 249.909 229.857Z"
                  fill="black"
                />
                <path
                  id="Vector_24"
                  opacity="0.2"
                  d="M262.868 229.857V228.663C268.311 228.663 272.741 221.967 272.741 213.738H273.975C273.975 222.626 268.992 229.857 262.868 229.857Z"
                  fill="black"
                />
              </g>
              <g id="patty1">
                <path
                  id="Vector_25"
                  d="M335.064 213.738H301.742C301.533 213.738 301.329 213.744 301.125 213.762C298.948 213.912 296.911 214.854 295.423 216.399C293.934 217.943 293.106 219.976 293.104 222.087C293.101 224.199 293.925 226.233 295.41 227.781C296.895 229.328 298.93 230.275 301.107 230.43C301.317 230.448 301.526 230.454 301.742 230.454H335.064C337.355 230.454 339.552 229.573 341.172 228.006C342.792 226.438 343.702 224.312 343.702 222.096C343.702 219.879 342.792 217.753 341.172 216.186C339.552 214.618 337.355 213.738 335.064 213.738Z"
                  fill="#FF6584"
                />
                <path
                  id="Vector_26"
                  opacity="0.2"
                  d="M298.386 229.791C304.063 229.087 308.53 222.155 308.53 213.738H307.296C307.296 221.97 302.865 228.663 297.423 228.663V229.331L298.386 229.791Z"
                  fill="black"
                />
                <path
                  id="Vector_27"
                  opacity="0.2"
                  d="M310.381 229.857V228.663C315.825 228.663 320.254 221.967 320.254 213.738H321.488C321.488 222.626 316.506 229.857 310.381 229.857Z"
                  fill="black"
                />
                <path
                  id="Vector_28"
                  opacity="0.2"
                  d="M323.339 229.857V228.663C328.783 228.663 333.212 221.967 333.212 213.738H334.447C334.447 222.626 329.464 229.857 323.339 229.857Z"
                  fill="black"
                />
              </g>
              <g id="smoke">
                <path
                  id="Vector_29"
                  d="M272.153 133.476C267.786 131.193 262.387 133.683 260.211 137.723C257.564 142.637 259.758 148.545 262.845 152.746C266.052 157.111 270.405 160.714 272.547 165.758C274.595 170.505 274.838 175.801 273.232 180.704C271.626 185.608 268.276 189.803 263.776 192.543C261.768 193.772 263.624 196.873 265.645 195.636C270.058 192.969 273.55 189.089 275.674 184.494C277.798 179.898 278.458 174.794 277.57 169.833C277.119 167.261 276.26 164.771 275.022 162.453C273.681 160.087 272.064 157.877 270.205 155.865C266.992 152.187 262.949 148.133 262.747 143.016C262.711 142.352 262.758 141.686 262.89 141.034C262.986 140.578 263.129 140.133 263.317 139.705C263.766 138.785 264.433 137.981 265.262 137.357C266.031 136.763 266.942 136.365 267.91 136.197C268.722 136.08 269.552 136.21 270.285 136.569C272.381 137.665 274.252 134.573 272.153 133.476V133.476Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_30"
                  d="M327.863 155.143C326.004 154.565 324.017 154.486 322.115 154.913C320.212 155.341 318.465 156.26 317.06 157.572C316.334 158.295 315.796 159.175 315.491 160.138C315.185 161.102 315.122 162.123 315.305 163.115C315.658 165.285 317.075 167.213 318.611 168.767C321.618 171.807 325.827 173.773 328.348 177.263C329.466 178.75 330.168 180.491 330.385 182.318C330.514 183.96 330.203 185.606 329.482 187.097C327.601 190.796 323.867 193.311 319.929 194.931C319.009 195.31 318.806 196.622 319.265 197.381C319.521 197.782 319.927 198.072 320.399 198.192C320.87 198.312 321.371 198.251 321.797 198.024C329.044 195.044 335.749 188.368 333.75 180.167C332.699 175.852 329.476 172.807 326.006 170.16C324.282 168.938 322.655 167.594 321.136 166.14C319.936 164.907 318.689 163.223 318.91 161.552C318.998 160.971 319.292 160.437 319.741 160.042C320.286 159.56 320.905 159.163 321.576 158.863C322.398 158.482 323.289 158.262 324.2 158.217C325.11 158.171 326.021 158.3 326.879 158.597C327.352 158.719 327.856 158.656 328.282 158.422C328.708 158.188 329.022 157.802 329.156 157.346C329.277 156.888 329.209 156.403 328.968 155.993C328.727 155.582 328.331 155.278 327.863 155.143V155.143Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_31"
                  d="M299.678 104.19C298.575 103.278 297.183 102.759 295.732 102.72C294.357 102.745 293.019 103.163 291.889 103.922C289.336 105.716 287.53 108.334 286.797 111.303C284.926 118.237 287.366 125.709 290.757 131.815C292.471 134.902 294.467 137.832 296.193 140.913C297.857 143.859 299.134 146.995 299.995 150.247C301.752 156.916 301.908 163.885 300.453 170.621C298.972 177.326 295.855 183.965 290.552 188.592C290.205 188.927 290.01 189.383 290.01 189.858C290.01 190.333 290.205 190.789 290.552 191.124C290.899 191.46 291.37 191.649 291.861 191.649C292.352 191.649 292.823 191.46 293.17 191.124C297.877 187.018 301.024 181.386 302.924 175.594C305.02 169.053 305.633 162.151 304.722 155.359C304.309 151.977 303.513 148.649 302.348 145.436C301.085 142.199 299.509 139.084 297.639 136.135C294.159 130.443 290.455 124.686 289.951 117.908C289.703 114.575 290.134 111.101 292.265 108.42C292.149 108.567 292.359 108.314 292.36 108.313C292.489 108.163 292.623 108.017 292.762 107.876C293.026 107.601 293.31 107.345 293.612 107.109C293.548 107.159 293.384 107.265 293.682 107.065C293.831 106.965 293.982 106.87 294.138 106.781C294.264 106.709 294.394 106.645 294.524 106.579C294.601 106.541 294.679 106.505 294.758 106.471C294.578 106.546 294.588 106.547 294.788 106.474C294.933 106.43 295.65 106.28 295.252 106.328C295.385 106.313 295.519 106.305 295.652 106.303C295.709 106.302 296.208 106.327 295.964 106.301C295.679 106.271 296.19 106.35 296.194 106.351C296.353 106.389 296.51 106.437 296.664 106.495C296.278 106.346 297.295 106.899 297.061 106.723C297.415 107.045 297.883 107.224 298.37 107.224C298.856 107.224 299.324 107.045 299.678 106.723C300.317 106.105 300.472 104.787 299.678 104.19L299.678 104.19Z"
                  fill="#E6E6E6"
                />
              </g>
              <path
                id="Vector_32"
                d="M157.528 373.361L143.571 376.943L117.937 262.307L146.705 259.827L157.528 373.361Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_33"
                d="M93.6722 375.123L79.3947 377.21L66.8467 260.552L95.7221 261.124L93.6722 375.123Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_34"
                d="M86.321 209.123L87.6394 232.932C87.6879 233.808 87.541 234.683 87.2088 235.499C86.8766 236.315 86.3669 237.052 85.7141 237.661C85.0614 238.269 84.2809 238.735 83.4258 239.026C82.5706 239.317 81.6608 239.426 80.7581 239.347C79.2827 239.217 77.9013 238.59 76.8553 237.574C75.8094 236.559 75.1654 235.221 75.036 233.793L72.6493 207.469L53.8505 145.742L54.4202 106.061L76.6368 107.163L86.321 209.123Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_35"
                d="M98.2839 267.543C87.1555 263.805 74.2432 263.07 59.5471 265.338C61.6314 241.453 62.8384 219.272 61.8258 201.407H137.59L98.2839 267.543Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_36"
                d="M151.262 266.992C139.792 272.862 123.2 275.672 103.98 276.912L80.0548 203.06L138.73 201.958L151.262 266.992Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_37"
                d="M180.797 385.345L139.522 386.823C134.235 387.013 133.956 382.62 134.954 377.593L139.841 364.094C150.843 374.522 151.879 375.104 156.595 360.27L170.989 371.269L181.643 373.037C183.135 373.284 184.488 374.034 185.463 375.155C186.438 376.275 186.972 377.693 186.969 379.158C186.967 380.761 186.322 382.301 185.172 383.454C184.021 384.608 182.453 385.285 180.797 385.345Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_38"
                d="M118.283 385.345L77.008 386.823C71.7208 387.013 71.4419 382.62 72.4401 377.593L77.3267 364.094C88.3286 374.522 89.3646 375.104 94.0809 360.27L108.475 371.269L119.129 373.037C120.621 373.284 121.974 374.034 122.949 375.155C123.924 376.275 124.458 377.693 124.455 379.158C124.453 380.761 123.808 382.301 122.658 383.454C121.507 384.608 119.939 385.285 118.283 385.345Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_39"
                d="M127.906 47.6406C140.176 47.6406 150.123 38.0173 150.123 26.1464C150.123 14.2755 140.176 4.65221 127.906 4.65221C115.636 4.65221 105.689 14.2755 105.689 26.1464C105.689 38.0173 115.636 47.6406 127.906 47.6406Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_40"
                d="M116.513 64.1745L90.3086 56.4589L107.968 31.1064L127.906 39.3736L116.513 64.1745Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_41"
                d="M141.008 208.02C114.071 213.88 84.1674 211.555 58.4078 204.714C64.5765 171.434 61.5983 135.687 55.5595 106.612C50.8328 83.8539 63.3017 64.7569 84.0424 55.3565C88.5006 53.8097 93.1385 52.7993 97.8516 52.3481C112.401 51.1009 125.202 61.6553 126.72 75.7099L141.008 208.02Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_42"
                d="M70.9403 117.635L52.1416 115.43L57.8383 86.7713H70.9403V117.635Z"
                fill="#6C63FF"
              />
              <path
                id="hair"
                d="M127.595 29.5498L124.192 28.0863C123.421 27.7558 122.584 27.5914 121.741 27.6046C120.898 27.6178 120.067 27.8082 119.308 28.1628C118.548 28.5173 117.877 29.0274 117.341 29.6578C116.806 30.2882 116.418 31.0237 116.206 31.8134L111.462 40.1047L99.6487 38.2956L100.061 20.7436C100.599 17.4267 101.835 14.252 103.692 11.4159C105.55 8.57972 107.989 6.14254 110.859 4.25516C113.729 2.36777 116.969 1.07036 120.378 0.443213C123.787 -0.183934 127.293 -0.127465 130.679 0.609123L131.001 0.679698C136.768 1.94195 144.256 6.03864 148.164 10.3391L155.446 18.3517C155.792 18.7318 156.023 19.1963 156.114 19.6945C156.206 20.1927 156.154 20.7057 155.966 21.1777C155.777 21.6497 155.458 22.0627 155.044 22.3717C154.63 22.6806 154.136 22.8739 153.616 22.9303L143.656 23.9936L127.595 29.5498Z"
                fill="#2F2E41"
              />
              <path
                id="spatula"
                d="M201.286 176.135L188.529 186.961C188.344 187.118 188.103 187.197 187.858 187.181C187.613 187.165 187.385 187.056 187.223 186.878C187.061 186.7 186.979 186.466 186.995 186.229C187.011 185.993 187.124 185.771 187.308 185.615L200.065 174.789L197.624 172.096L184.866 182.922C184.682 183.078 184.441 183.157 184.196 183.142C183.951 183.126 183.723 183.017 183.561 182.839C183.399 182.66 183.317 182.427 183.333 182.19C183.349 181.953 183.462 181.732 183.646 181.576L196.403 170.75L193.962 168.057L181.204 178.883C181.113 178.96 181.007 179.02 180.892 179.058C180.776 179.096 180.655 179.111 180.533 179.104C180.412 179.096 180.293 179.065 180.184 179.013C180.075 178.961 179.978 178.889 179.898 178.801C179.817 178.712 179.756 178.609 179.717 178.498C179.678 178.386 179.662 178.269 179.67 178.151C179.678 178.034 179.71 177.919 179.764 177.813C179.817 177.708 179.892 177.614 179.984 177.536L192.741 166.71L189.689 163.344L171.661 178.643C170.052 180.009 168.977 181.869 168.615 183.91C168.253 185.952 168.627 188.052 169.675 189.858L115.246 236.047L120.129 241.433L174.522 195.274C176.181 196.541 178.247 197.206 180.36 197.154C182.473 197.101 184.501 196.334 186.09 194.986L204.337 179.502L201.286 176.135Z"
                fill="#089EF2"
              />
              <g id="hold-arm">
                <path
                  id="Vector_43"
                  d="M139.299 209.123L140.618 232.932C140.666 233.808 140.519 234.683 140.187 235.499C139.855 236.315 139.345 237.052 138.692 237.661C138.04 238.269 137.259 238.735 136.404 239.026C135.549 239.317 134.639 239.426 133.736 239.347C132.261 239.217 130.879 238.59 129.834 237.574C128.788 236.559 128.144 235.221 128.014 233.793L125.627 207.469L106.829 145.742L107.398 106.061L129.615 107.163L139.299 209.123Z"
                  fill="#FFB9B9"
                />
                <path
                  id="Vector_44"
                  d="M131.324 112.846C124.564 106.573 115.641 106.342 105.689 108.988V79.3693C105.689 75.8236 107.145 72.423 109.737 69.9158C112.328 67.4086 115.843 66 119.508 66C121.195 66 122.865 66.3263 124.419 66.9597C125.974 67.593 127.382 68.5207 128.56 69.6882C129.739 70.8556 130.665 72.2393 131.282 73.7578C131.9 75.2763 132.198 76.899 132.159 78.5305L131.324 112.846Z"
                  fill="#6C63FF"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="223"
                y1="0"
                x2="223"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.180059" stop-color="#F5972E" />
                <stop offset="1" stop-color="#E4C6A3" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="hide-text">Preparing Awesome meals for you ...</h1>
        </div>
      </div>
    </div>
    <div className="slider">
    <center>
    <div className="burger-click">
        <h1>🍔</h1>
      </div>
      <br />
      <h1> Your Awesome Meals are ready</h1>
      <br />
      <br />
      <h2>Click "🍔" to go to main menu</h2>
    </center>
    </div>
  </div>,
  document.getElementById("root")
);

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter * 7.45 + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";

  counter++;

  carouselSlide.style.transform = "translateX(" + -size * counter  * 3.7+ "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";

  counter--;

  carouselSlide.style.transform = "translateX(" + -size * counter * 3.7 + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter * 3.7 + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter * 3.7 + "px)";
  }
});

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".hide-text", {
  y: "0%",
  duration: 1,
  stagger: 0.5,
});

tl.to(".slider", {
  y: "0",
  duration: 2,
  delay: 4,
});

tl.to(
  ".intro",
  {
    y: "-100%",
    duration: 2,
  },
  "-=2"
);

document.querySelector('.burger-click').addEventListener('click', () => {
  tl.to('.slider', {
    y: "-100%",
    duration: 1
  })
})