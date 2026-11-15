<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";

  function prereleaseLogin(event: { preventDefault: () => void }) {
    event.preventDefault();
    isLoggedIn ? logout : login;
    alert("הכפתור לא פעיל בשלב זה של הפרוייקט");
    return isLoggedIn;
  }
  let isLoggedIn = false;
  let id = 10000000; //TODO  change to really profile
  let avatarUrl = `https://avatars.githubusercontent.com/u/${id}`;

  async function login() {
    isLoggedIn = true;
  }

  function logout() {
    isLoggedIn = false;
    avatarUrl = ""; // Clear avatar URL on logout
  }
  let { children } = $props();
</script>

<header>
  {#if $page.data.session}
    <p>מחובר בתור: {@html $page.data.session.user?.name}</p>
    <button onclick={signOut} class="logged-in">
      <span>ניתוק</span>
    </button>
  {:else}
    <button onclick={() => signIn()} class="login-btn">
      <span>התחברות עם GitHub</span>
    </button>
  {/if}
  <a href="/" aria-label="MainLOGO">
    <!-- Copyrighted material, belongs to @zvielkoren -->
    <svg
      class="logo"
      width="100%"
      height="100%"
      viewBox="0 0 2363 2363"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
    >
      <rect
        x="-37.907"
        y="-0.253"
        width="2434.83"
        height="2365.32"
        style="fill:white;stroke:rgb(0,101,255);stroke-opacity:0;stroke-width:135.09px;"
      />
      <g transform="matrix(1.03443,0,0,0.774566,-62.2267,619.695)">
        <rect
          x="60.331"
          y="1796.53"
          width="2282.66"
          height="323.722"
          style="fill:rgb(32,76,249);stroke:rgb(0,101,255);stroke-opacity:0;stroke-width:147.83px;"
        />
      </g>
      <g transform="matrix(1.03471,0,0,0.767451,-62.5443,-1291.7)">
        <rect
          x="60.331"
          y="1796.53"
          width="2282.66"
          height="323.722"
          style="fill:rgb(32,76,249);stroke:rgb(0,101,255);stroke-opacity:0;stroke-width:148.3px;"
        />
      </g>
      <g transform="matrix(23.2409,0,0,23.2409,-26224.2,-26630.4)">
        <path
          d="M1171.16,1218.63C1170.12,1218.63 1169.16,1218.11 1168.59,1217.25C1168.02,1216.39 1167.93,1215.3 1168.34,1214.35C1172.36,1204.99 1181.8,1183.06 1184.61,1176.55C1185.09,1175.42 1186.2,1174.69 1187.43,1174.69L1187.45,1174.69C1188.49,1174.69 1189.45,1175.21 1190.02,1176.07C1190.59,1176.94 1190.68,1178.03 1190.28,1178.98C1186.25,1188.33 1176.81,1210.26 1174,1216.78C1173.52,1217.9 1172.41,1218.63 1171.18,1218.63L1171.16,1218.63Z"
          style="fill:rgb(32,76,249);fill-rule:nonzero;"
        />
        <path
          d="M1199.04,1208.28C1198.48,1208.49 1197.86,1208.41 1197.37,1208.07C1196.88,1207.73 1196.59,1207.17 1196.59,1206.57L1196.59,1203.93C1196.59,1203.14 1197.11,1202.43 1197.87,1202.2C1201.72,1201 1213.02,1197.49 1214.69,1196.97C1214.82,1196.93 1214.9,1196.82 1214.9,1196.69L1214.9,1196.68C1214.9,1196.56 1214.82,1196.44 1214.69,1196.4C1213.02,1195.88 1201.72,1192.37 1197.87,1191.18C1197.11,1190.94 1196.59,1190.23 1196.59,1189.44L1196.59,1186.8C1196.59,1186.2 1196.88,1185.65 1197.37,1185.31C1197.86,1184.96 1198.48,1184.88 1199.04,1185.09C1204.17,1186.98 1215.89,1191.31 1220.08,1192.86C1220.99,1193.19 1221.59,1194.06 1221.59,1195.03L1221.59,1198.34C1221.59,1199.31 1220.99,1200.18 1220.08,1200.52C1215.89,1202.06 1204.17,1206.39 1199.04,1208.28Z"
          style="fill:rgb(32,76,249);fill-rule:nonzero;"
        />
        <g transform="matrix(-1,0,0,-1,2358.37,2393.37)">
          <path
            d="M1199.04,1208.28C1198.48,1208.49 1197.86,1208.41 1197.37,1208.07C1196.88,1207.73 1196.59,1207.17 1196.59,1206.57L1196.59,1203.93C1196.59,1203.14 1197.11,1202.43 1197.87,1202.2C1201.72,1201 1213.02,1197.49 1214.69,1196.97C1214.82,1196.93 1214.9,1196.82 1214.9,1196.69L1214.9,1196.68C1214.9,1196.56 1214.82,1196.44 1214.69,1196.4C1213.02,1195.88 1201.72,1192.37 1197.87,1191.18C1197.11,1190.94 1196.59,1190.23 1196.59,1189.44L1196.59,1186.8C1196.59,1186.2 1196.88,1185.65 1197.37,1185.31C1197.86,1184.96 1198.48,1184.88 1199.04,1185.09C1204.17,1186.98 1215.89,1191.31 1220.08,1192.86C1220.99,1193.19 1221.59,1194.06 1221.59,1195.03L1221.59,1198.34C1221.59,1199.31 1220.99,1200.18 1220.08,1200.52C1215.89,1202.06 1204.17,1206.39 1199.04,1208.28Z"
            style="fill:rgb(32,76,249);fill-rule:nonzero;"
          />
        </g>
        <!-- Copyrighted material end -->
      </g>
    </svg>
  </a>
</header>

{@render children()}
