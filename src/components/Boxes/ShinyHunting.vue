<template>
    <div class="container-xl">
        <div class="row gap-3">
            <div class="box border text-white pb-5 rounded col-sm-7">
                <h2 class="m-3">Pokemon</h2>
                <p>unfinished</p>
            </div>

            <div class="box border text-white pb-5 rounded col-sm-4 px-4">
               <h2 class="m-3">Resets</h2>
                <p>Current reset: {{ resets }}</p>

                <div class="d-flex gap-2">
                    <button class="btn btn-dark rounded" @click="increase()">Add</button>
                    <button type="button" class="btn btn-danger rounded" @click="restart()">Restart</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            resets: 0,
        }
    }, methods: {
        increase() {
            this.resets++;
        },

        restart() {
            this.resets = 0;
        }
    }
}

</script>