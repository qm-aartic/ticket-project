

function Header() {
    return (
        <div className="navbar bg-primary text-white py-4">
            <div className="navbar-start hidden lg:flex ml-20">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Dashboard</a></li>
                    <li><a>Tickets</a></li>
                    <li><a>Archive</a></li>
                </ul>
            </div>
            <div className="navbar-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><a>Dashboard</a></li>
                        <li><a>Tickets</a></li>
                        <li><a>Archive</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Services</a></li>
                        <li><a>Account</a></li>
                    </ul>
                </div>
                <svg
                    className="max-w-48"
                    xmlns="http://www.w3.org/2000/svg" width="218" height="58" viewBox="0 0 218 58" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M73.815 29.586C75.753 29.926 77.351 31.015 78.575 32.851C79.901 31.015 80.615 28.328 80.615 24.86C80.615 17.958 77.691 14.082 73.169 14.082C68.647 14.082 65.723 17.958 65.723 24.86C65.723 31.763 68.647 35.638 73.169 35.638C74.631 35.638 75.957 35.23 77.045 34.415C75.991 32.612 75.209 32.001 73.815 31.795V29.586ZM83.743 39.175C81.601 39.175 79.289 38.392 77.997 36.081C76.637 36.999 75.005 37.474 73.169 37.474C67.015 37.474 63.479 32.103 63.479 24.86C63.479 17.618 67.015 12.246 73.169 12.246C79.323 12.246 82.859 17.618 82.859 24.86C82.859 29.009 81.703 32.544 79.527 34.788C80.581 36.624 81.601 37.134 83.743 37.134V39.175ZM97.92 19.454V37.134H95.88V34.347C93.977 36.318 92.412 37.474 89.829 37.474C86.157 37.474 84.593 35.366 84.593 31.524V19.454H86.633V31.321C86.633 34.245 87.516 35.844 90.237 35.844C92.412 35.844 93.637 34.518 95.881 32.476V19.456H97.921L97.92 19.454ZM111.86 26.73C111.453 23.093 109.854 20.78 106.76 20.747C103.156 20.712 101.626 24.384 101.592 26.73H111.86ZM101.592 28.363C101.592 32.375 103.258 35.843 107.27 35.843C109.548 35.843 110.67 35.061 112.438 32.273L114.104 33.157C112.201 36.284 110.466 37.473 107.1 37.473C102.476 37.473 99.552 34.517 99.552 28.293C99.552 22.819 102.34 19.114 106.828 19.114C111.623 19.114 113.9 22.888 113.9 28.362L101.592 28.363ZM127.84 26.73C127.433 23.093 125.834 20.78 122.74 20.747C119.137 20.712 117.607 24.384 117.572 26.73H127.84ZM117.572 28.363C117.572 32.375 119.238 35.843 123.25 35.843C125.528 35.843 126.65 35.061 128.418 32.273L130.084 33.157C128.181 36.284 126.446 37.473 123.08 37.473C118.457 37.473 115.532 34.517 115.532 28.293C115.532 22.819 118.32 19.114 122.809 19.114C127.603 19.114 129.881 22.888 129.881 28.362H117.571L117.572 28.363ZM131.717 37.134V19.454H133.756V22.242C135.66 20.271 137.225 19.114 139.809 19.114C143.481 19.114 145.045 21.222 145.045 25.064V37.134H143.004V25.269C143.004 22.345 142.121 20.746 139.401 20.746C137.225 20.746 136 22.071 133.756 24.113V37.133H131.716L131.717 37.134ZM155.584 37.134V12.586H159.528L166.295 33.395H166.362L173.162 12.585H177.106V37.134H174.863V14.423H174.795L167.416 37.133H165.274L157.897 14.423H157.828V37.133L155.584 37.134ZM189.89 27.138C181.799 28.907 180.71 30.573 180.71 32.816C180.71 34.755 182.037 35.843 183.872 35.843C185.777 35.843 188.122 34.72 189.891 32.919V27.138H189.89ZM190.23 37.134L189.959 34.992C187.849 36.659 186.252 37.474 183.533 37.474C180.779 37.474 178.67 35.774 178.67 32.851C178.67 28.023 182.615 27.138 189.993 25.507V24.283C189.993 21.937 188.973 20.746 185.947 20.746C183.837 20.746 182.104 21.903 180.813 23.943L179.453 23.126C180.983 20.271 183.159 19.115 186.013 19.115C190.027 19.115 191.93 20.745 191.93 24.657V33.905C191.93 34.788 191.998 35.945 192.203 37.134H190.231H190.23ZM194.038 37.134V19.454H196.078V22.82H196.146C197.098 20.644 199.002 19.114 201.246 19.114H202.164V21.086H201.246C199.002 21.086 196.078 23.738 196.078 27.138V37.134H194.038Z" fill="#FEFEFE" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M210.393 33.836H210.46L215.39 19.454H217.566L210.97 38.391C209.78 41.859 208.523 43.389 205.327 43.389C204.443 43.389 203.897 43.321 203.422 43.186V41.521C204.035 41.589 204.68 41.759 205.462 41.759C206.89 41.759 208.455 40.501 209.44 36.862L203.287 19.454H205.531L210.393 33.836ZM66.325 44.563V51.893C66.325 52.895 66.761 53.418 67.733 53.418C68.705 53.418 69.156 52.895 69.156 51.893V44.563H71.158V51.909C71.158 54.215 69.794 55.189 67.733 55.189C65.672 55.189 64.322 54.215 64.322 51.909V44.563H66.325ZM72.32 55.044V47.148H74.09V48.048C74.757 47.468 75.382 47.003 76.136 47.003C77.256 47.003 77.836 47.569 77.836 49.033V55.043H76.006V49.237C76.006 48.716 75.832 48.366 75.339 48.366C74.961 48.366 74.54 48.73 74.149 49.078V55.044H72.32ZM78.938 55.044H80.767V47.148H78.938V55.044ZM78.939 45.783H80.768V44.128H78.939V45.783ZM84.643 52.228H84.673L85.876 47.148H87.706L85.557 55.043H83.757L81.609 47.148H83.439L84.643 52.228ZM91.857 50.051V49.615C91.857 48.919 91.523 48.484 90.783 48.484C90.043 48.484 89.709 48.919 89.709 49.614V50.051H91.857ZM89.709 51.531V52.577C89.709 53.361 90.173 53.707 90.783 53.707C91.552 53.707 91.857 53.216 91.857 52.606H93.686C93.599 54.232 92.626 55.189 90.783 55.189C89.041 55.189 87.879 54.115 87.879 52.388V49.804C87.879 48.077 89.041 47.003 90.783 47.003C92.481 47.003 93.686 48.077 93.686 49.689V51.531H89.709ZM94.702 55.044V47.148H96.488V48.192H96.516C96.936 47.409 97.489 47.002 98.403 47.002V48.977C98.098 48.89 97.75 48.773 97.431 48.773C96.836 48.773 96.531 49.223 96.531 49.645V55.044H94.7H94.702ZM102.874 49.558C102.627 48.831 102.163 48.484 101.611 48.484C101.19 48.484 100.871 48.788 100.871 49.194C100.871 50.413 104.441 50.443 104.441 52.794C104.441 54.363 103.338 55.189 101.814 55.189C100.711 55.189 99.724 54.913 98.839 52.939L100.479 52.489C100.639 53.229 101.089 53.708 101.814 53.708C102.366 53.708 102.7 53.448 102.7 53.012C102.7 51.502 99.129 51.866 99.129 49.208C99.129 47.714 100.334 47.003 101.626 47.003C102.99 47.003 103.934 47.787 104.384 48.977L102.874 49.558ZM105.196 55.044H107.025V47.148H105.196V55.044ZM105.196 45.783H107.025V44.128H105.196V45.783ZM107.925 48.976V47.496H108.651V45.348H110.48V47.496H111.655V48.976H110.48V53.011C110.48 53.404 110.814 53.593 111.307 53.593C111.437 53.593 111.554 53.593 111.67 53.578V55.116C111.324 55.1688 110.975 55.1929 110.625 55.188C109.434 55.188 108.651 54.753 108.651 53.622V48.976H107.925ZM112.627 56.205C112.802 56.233 112.977 56.233 113.164 56.233C113.963 56.233 114.485 55.538 114.485 55.188C114.485 54.725 114.34 54.187 114.152 53.519L112.322 47.147H114.181L115.414 52.373H115.443L116.59 47.147H118.448L116.344 55.015C115.777 57.148 115.037 57.831 113.208 57.831C113.034 57.831 112.831 57.816 112.627 57.802V56.205ZM123.89 52.663C123.89 53.273 124.327 53.593 124.965 53.593C125.604 53.593 126.039 53.273 126.039 52.663V49.528C126.039 48.919 125.604 48.599 124.965 48.599C124.327 48.599 123.891 48.919 123.891 49.528L123.89 52.663ZM122.063 49.993C122.063 47.903 123.137 47.003 124.965 47.003C126.795 47.003 127.869 47.903 127.869 49.993V52.198C127.869 54.289 126.795 55.188 124.965 55.188C123.137 55.188 122.063 54.289 122.063 52.198V49.993ZM132.223 46.016H131.701C131.266 46.016 131.077 46.292 131.077 46.683V47.496H132.165V48.976H131.077V55.044H129.247V48.977H128.42V47.496H129.248V46.742C129.248 44.912 130.017 44.419 131.352 44.419C131.614 44.419 131.918 44.462 132.222 44.506V46.016H132.223ZM136.549 55.044V44.564H138.552V53.273H141.774V55.043L136.549 55.044ZM144.285 52.663C144.285 53.273 144.721 53.593 145.359 53.593C145.999 53.593 146.433 53.273 146.433 52.663V49.528C146.433 48.919 145.998 48.599 145.359 48.599C144.721 48.599 144.285 48.919 144.285 49.528V52.663ZM142.456 49.993C142.456 47.903 143.53 47.003 145.359 47.003C147.187 47.003 148.262 47.903 148.262 49.993V52.198C148.262 54.289 147.187 55.188 145.359 55.188C143.53 55.188 142.456 54.289 142.456 52.198V49.993ZM149.424 55.044V47.148H151.194V48.048C151.862 47.468 152.487 47.003 153.24 47.003C154.359 47.003 154.94 47.569 154.94 49.033V55.043H153.11V49.237C153.11 48.716 152.936 48.366 152.443 48.366C152.065 48.366 151.645 48.73 151.252 49.078V55.044H149.424ZM159.787 48.933C159.424 48.542 159.09 48.367 158.683 48.367C158.19 48.367 157.784 48.687 157.784 50.254V51.939C157.784 53.505 158.19 53.826 158.684 53.826C159.09 53.826 159.424 53.651 159.787 53.259V48.933ZM159.932 55.043V54.086H159.903C159.584 54.579 158.771 55.189 157.958 55.189C156.535 55.189 155.955 54.086 155.955 52.054V50.138C155.955 48.107 156.535 47.003 157.958 47.003C158.451 47.003 158.916 47.236 159.788 47.873V44.563H161.616V55.043H159.932ZM164.316 52.663C164.316 53.273 164.752 53.593 165.391 53.593C166.03 53.593 166.464 53.273 166.464 52.663V49.528C166.464 48.919 166.03 48.599 165.391 48.599C164.753 48.599 164.316 48.919 164.316 49.528V52.663ZM162.486 49.993C162.486 47.903 163.561 47.003 165.391 47.003C167.219 47.003 168.294 47.903 168.294 49.993V52.198C168.294 54.289 167.218 55.188 165.39 55.188C163.56 55.188 162.487 54.289 162.487 52.198V49.993H162.486ZM169.454 55.044V47.148H171.225V48.048C171.892 47.468 172.517 47.003 173.271 47.003C174.389 47.003 174.971 47.569 174.971 49.033V55.043H173.141V49.237C173.141 48.716 172.967 48.366 172.473 48.366C172.096 48.366 171.675 48.73 171.283 49.078V55.044H169.454ZM26.084 36.284C20.979 36.284 16.84 31.182 16.84 24.888C16.84 18.595 20.979 13.493 26.084 13.493C31.19 13.493 35.33 18.595 35.33 24.888C35.33 31.182 31.19 36.284 26.084 36.284ZM25.98 12.625C19.095 12.625 13.515 18.14 13.515 24.945C13.515 31.747 19.095 37.265 25.98 37.265C32.865 37.265 38.446 31.747 38.446 24.945C38.446 18.14 32.865 12.625 25.98 12.625ZM0 13.511C0 13.511 9.021 19.886 4.914 27.604C4.914 27.604 10.984 19.307 13.019 30.98C13.019 30.98 11.275 28.335 7.908 28.996C4.965 29.574 4.601 31.852 4.601 31.852L0 13.511ZM51.626 13.511C51.626 13.511 42.605 19.886 46.712 27.604C46.712 27.604 40.642 19.307 38.607 30.98C38.607 30.98 40.351 28.335 43.718 28.996C46.66 29.574 47.025 31.852 47.025 31.852L51.626 13.511Z" fill="#FEFEFE" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.357 37.921C15.679 37.454 16.923 37.048 18.543 36.431C17.912 36.07 17.078 35.371 16.477 34.859C14.883 35.431 13.41 36.002 12.489 36.317C11.556 36.635 8.505 37.343 7.397 34.349C6.585 32.153 8.146 30.755 9.652 30.755C10.216 30.755 10.79 30.97 10.788 31.044C10.5117 31.043 10.2414 31.124 10.0112 31.2768C9.78097 31.4295 9.60126 31.6471 9.4948 31.9021C9.38835 32.157 9.35993 32.4378 9.41315 32.7089C9.46637 32.98 9.59883 33.2292 9.79376 33.425C9.98869 33.6208 10.2373 33.7543 10.5082 33.8087C10.7791 33.8631 11.06 33.8358 11.3154 33.7305C11.5708 33.6251 11.7892 33.4464 11.9429 33.2168C12.0966 32.9873 12.1788 32.7173 12.179 32.441C12.179 31.836 11.871 31.373 11.412 31.023C10.792 30.593 9.927 30.338 9.107 30.338C7.272 30.338 5.672 31.952 5.412 33.822C5.116 35.942 7.441 40.362 14.357 37.921ZM7.154 41.468C6.876 40.497 7.936 39.703 9.508 39.703H42.745C44.317 39.703 45.377 40.497 45.1 41.468C44.82 42.438 43.312 43.138 41.744 43.021L28.941 42.071C27.371 41.954 24.807 41.954 23.238 42.071L10.508 43.021C8.941 43.138 7.43 42.439 7.154 41.468ZM28 11.419C26.665 9.483 27.455 8.273 28.36 8.278C29.796 8.287 30.321 9.097 30.313 10.395C31.083 9.947 31.798 8.772 31.806 7.669C31.812 6.568 30.953 5.541 29.852 5.534C28.506 5.524 27.814 5.947 27.196 6.654C27.299 6.434 27.409 6.219 27.517 6.011C27.75 5.557 28.022 5.004 28.019 4.513C28.016 3.923 27.736 3.276 27.339 2.57C26.961 1.884 26.423 0.864 26.064 0C25.715 0.869 25.191 1.895 24.821 2.586C24.431 3.296 24.161 3.946 24.164 4.536C24.167 5.028 24.446 5.576 24.684 6.028C24.798 6.238 24.911 6.457 25.02 6.682C24.395 5.957 23.704 5.525 22.341 5.534C21.241 5.541 20.381 6.568 20.388 7.669C20.394 8.772 21.11 9.947 21.879 10.395C21.871 9.097 22.397 8.287 23.832 8.278C24.737 8.273 25.519 9.371 24.109 11.418C25.649 11.043 26.515 11.1 27.999 11.418M46.259 34.003C45.998 32.133 44.401 30.519 42.565 30.519C41.744 30.519 40.88 30.773 40.26 31.202C39.8 31.554 39.492 32.016 39.492 32.62C39.4918 32.8963 39.5736 33.1665 39.7271 33.3963C39.8805 33.6261 40.0987 33.8051 40.354 33.9108C40.6093 34.0165 40.8902 34.0441 41.1612 33.99C41.4322 33.9359 41.681 33.8026 41.8762 33.6071C42.0714 33.4115 42.2041 33.1623 42.2576 32.8913C42.3111 32.6202 42.2829 32.3393 42.1767 32.0842C42.0704 31.8292 41.8909 31.6113 41.6608 31.4584C41.4307 31.3054 41.1603 31.2242 40.884 31.225C40.881 31.149 41.456 30.935 42.02 30.935C43.526 30.935 45.086 32.333 44.274 34.528C43.166 37.524 40.114 36.816 39.182 36.497C38.261 36.183 34.102 34.597 32.509 34.024L32.422 34.098C28.619 32.715 28 32.494 26.186 32.118C20.341 30.905 19.935 34.784 19.935 34.784C19.935 34.919 20.431 33.069 24.302 33.466C25.89 33.626 26.832 34.062 30.486 35.569C30.472 35.577 30.456 35.589 30.444 35.597C32.064 36.214 35.993 37.636 37.314 38.102C44.23 40.542 46.554 36.123 46.259 34.003Z" fill="#FEFEFE" />
                </svg>
            </div>

            <div className="navbar-end hidden lg:flex mr-20">
                <ul className="menu menu-horizontal px-1 items-center flex">
                    <li><a>FAQ</a></li>
                    <li><a>Services</a></li>
                    <div className="w-5"></div>
                    <li><a className="btn bg-white px-8">Sign In</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;