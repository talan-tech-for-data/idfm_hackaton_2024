<script>
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { webVitals } from '$lib/vitals';
    import Header from './Header.svelte';
    import './styles.css';

    /** @type {import('./$types').LayoutServerData} */
    export let data;

    $: if (browser && data?.analyticsId) {
        webVitals({
            path: $page.url.pathname,
            params: $page.params,
            analyticsId: data.analyticsId
        });
    }
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <footer>
        <p>
            © 2024<br>
            Talan pour Hackaton IDFM<br>
        </p>
    </footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        height: fit-content;
    }

    main {
        flex: 1;
    }

    footer p {
        text-align: center;
        padding: 1rem;
    }
</style>