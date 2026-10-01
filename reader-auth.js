async function requireReaderLogin() {
    const { data } = await supabaseClient.auth.getSession();

    if (!data.session) {
        const currentPage =
            window.location.pathname +
            window.location.search;

        window.location.href =
            "login.html?return=" +
            encodeURIComponent(currentPage);

        return false;
    }

    const nickname =
        data.session.user.user_metadata?.nickname || "Reader";

    window.readerNickname = nickname;

    return true;
}

window.readerAuthReady = requireReaderLogin();
