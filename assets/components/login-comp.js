const loginComponent = `<form
      class="client-login fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff5b] backdrop-blur-sm border border-stone-200 shadow-2xl rounded-lg w-[450px] px-10 py-9"
    >
      <i
        class="close fa-solid fa-circle-xmark text-xl text-purple-900 absolute top-3 right-5 cursor-pointer active:scale-95"
      ></i>
      <h1 class="text-2xl text-purple-900 font-semibold text-center mb-6">
        Log In to Your Financial Hub
      </h1>
      <label for="user-id" class="text-purple-900"
        >User ID<input
          type="text"
          name=""
          id="user-id"
          class="text-lg w-full outline-0 border rounded px-2 py-0.5 mt-1 mb-3"
          required
      /></label>
      <label for="password" class="text-purple-900"
        >Password<input
          type="password"
          name=""
          id="password"
          class="text-lg w-full outline-0 border rounded px-2 py-0.5 mt-1"
          required
      /></label>
      <a
        href="#"
        class="text-[12px] text-purple-900 tracking-wide border-b-2 border-dotted border-purple-900"
        >Forgot My Password</a
      >
      <button
        type="submit"
        class="w-full bg-purple-900 text-white tracking-wider rounded p-1.5 mt-5 active:scale-95"
      >
        LOG IN
      </button>
    </form>`;

export default loginComponent;
