<script>
    let number = '';
    let result = '';

    async function fetchResult() {
        const response = await fetch(`http://localhost:8000/add_two/${number}`);
        const data = await response.json();
        result = data.result;
    }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        text-align: center;
    }
    h1 {
        margin-top: 20px;
    }
    .result-box {
        margin-left: 10px;
        padding: 5px;
        border: 1px solid #ccc;
    }
</style>

<div class="container">
    <h1>Currently it only shows an example of how to connect the Front to the Back</h1>
    <input type="number" bind:value={number} placeholder="Enter a number" />
    <button on:click={fetchResult}>Submit</button>
    <div class="result-box">{result}</div>
</div>