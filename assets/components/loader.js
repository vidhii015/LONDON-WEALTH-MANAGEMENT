const loader = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loader</title>
    <!-- tailwindcss -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      .loader {
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(#514b82 0 0);
        background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
        animation: l34-1 2s infinite alternate, l34-2 2s infinite alternate;
      }

      @keyframes l34-1 {
        0%,
        20% {
          background-size: 20px 20px;
        }
        40%,
        60% {
          background-size: 100% 20px;
        }
        80%,
        100% {
          background-size: 20px 20px;
        }
      }

      @keyframes l34-2 {
        0%,
        40% {
          background-position: 0 0, 100% 0, 50% 50%, 50% 50%, 0 100%, 100% 100%;
        }
        60%,
        100% {
          background-position: 50% 0, 50% 0, 0 50%, 100% 50%, 50% 100%, 50% 100%;
        }
      }
    </style>
  </head>
  <body>
    <div
      class="loader-overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#ffffffe6] flex justify-center items-center z-50"
    >
      <div class="loader h-16"></div>
    </div>
  </body>
</html>
`;

export default loader;
