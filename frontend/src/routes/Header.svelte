<script>
    import talanLogo from '$lib/images/talan-logo.svg';
</script>

<header>
    <a href="/">
        <img src={talanLogo} alt="Talan Logo" class="logo" />
    </a>
    <nav>
        <ul>
            <li><a href="/talk-to-speech">Talk</a></li>
            <li><a href="/itineraire">Itineraire</a></li>
            <li><a href="/mes-preferences">Mes preferences</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
        position: relative;
    }

    .logo {
        max-height: 150px; /* Adjust the size as needed */
        margin-left: -1.5rem; /* Add negative margin to move the logo to the left */
    }
    nav {
    position: absolute;
    right: 1.5rem; /* Default right margin */
    top: 50%;
    transform: translateY(-50%);
    margin-right: 3rem; /* Default right margin */
}

/* Media query for tablets and larger smartphones */
@media (max-width: 768px) {
    nav {
        right: 1rem; /* Reduced right margin for tablets and larger smartphones */
        margin-right: 2rem; /* Reduced right margin for tablets and larger smartphones */
    }
}

/* Media query for smaller tablets and large smartphones */
@media (max-width: 576px) {
    nav {
        right: 0.75rem; /* Further reduced right margin for smaller tablets and large smartphones */
        margin-right: 1.5rem; /* Further reduced right margin for smaller tablets and large smartphones */
    }
}

/* Media query for small smartphones */
@media (max-width: 480px) {
    nav {
        right: 0.5rem; /* Further reduced right margin for small smartphones */
        margin-right: 1rem; /* Further reduced right margin for small smartphones */
    }
}

/* Media query for very small smartphones */
@media (max-width: 320px) {
    nav {
        right: 0.25rem; /* Minimal right margin for very small smartphones */
        margin-right: 0.5rem; /* Minimal right margin for very small smartphones */
    }
}

    nav ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0;
        padding: 0;
    }

    nav a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }
</style>