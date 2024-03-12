<script setup>
import { reactive, toRefs, watch } from "vue";

import { Calculator } from "yoke_tools";
import dayjs from "dayjs";
const state = reactive({
    // 零售价
    price: undefined,
    // 模式
    model: 0,
    // 期数
    periods: 0,
    // 首付金额
    payment: undefined,
    // 租金
    periods1: 0,
    // 列表
    list: [],
    // 首付列表
    periodsList2: [],
});

const options = [
    {
        label: "月租模式",
        value: 1,
    },
    {
        label: "首付模式",
        value: 2,
    },
];

const periodsObj = {
    12: [3, 4, 5],
    9: [3, 4],
    6: [2],
};

watch(
    () => state.periods,
    (val) => {
        let periodsList2 = periodsObj[val]?.map((el, index) => ({
            label: el + "期",
            value: el,
        }));

        state.periodsList2 = periodsList2;
        state.periods1 = 0;
        state.list = [];
    }
);

// 月租模式
const periodsList = [6, 9, 12]?.map((el, index) => ({
    label: el + "期",
    value: el,
}));

// 首付模式
const periodsList1 = [3, 4, 5, 6, 7, 8, 9, 10, 12]?.map((el, index) => ({
    label: el + "期",
    value: el,
}));

// 系数列表
const coefficients = [
    {
        key: 12,
        key1: 3,
        value: 9.24,
    },
    {
        key: 12,
        key1: 4,
        value: 9.72,
    },
    {
        key: 12,
        key1: 5,
        value: 10.14,
    },
    {
        key: 9,
        key1: 3,
        value: 7.55,
    },
    {
        key: 9,
        key1: 4,
        value: 7.91,
    },
    {
        key: 6,
        key1: 2,
        value: 5.23,
    },
];

const { price, model, periods, payment, periods1, periodsList2 } = toRefs(state);
document.title = "租金计算器 - 租租机";

// 计算租金
const rent = () => {
    if (!model.value) return alert("请选择租赁方式");
    if (!periods.value) return alert("请选择租赁期数");
    if (!price.value) return alert("请输入设备零售价");

    // 月租模式
    if (model.value === 1) {
        if (!periods1.value) return alert("请选择首付期数");
        const coefficientsFind = coefficients.find(
            (el) => el.key === periods.value && el.key1 === periods1.value
        )?.value;
        const num = new Calculator().divide(price.value, coefficientsFind).getResult();
        const num1 = new Calculator().divide(200, periods.value).getResult();
        // 最终公式：(售价 / 系数 ) + ( 200 / 租期 )
        const rent = new Calculator().add(num, num1).getResult();

        // 首付
        // const payment = new Calculator().multiply(rent * 1, periods1.value).getResult();

        const list = [...Array(periods.value).keys()].map((el, index) => {
            return {
                label: "第" + (index + 1) + "期",
                value: (rent * 1).toFixed(0),
                time: dayjs(Date.now()).add(index, "M").format("YYYY-MM-DD"),
            };
        });
        state.list = list;
    }

    // 首付模式
    if (model.value === 2) {
        if (!payment.value) return alert("请输入首付金额");
        // 计算租金
        const num = new Calculator().subtract(price.value, payment.value).getResult();
        const num1 = new Calculator()
            .add(1, new Calculator().multiply(periods.value, 0.04).getResult() * 1, 0.04)
            .getResult();
        const num2 = new Calculator().subtract(periods.value, 1).getResult();
        // 最终公式：((售价-首付)* 1 * 4% + 4%) + 200 ) / (租期 - 1)
        const rent = new Calculator().multiply(num, num1).add(200).divide(num2).getResult();
        console.log(num, num1, num2);
        const list = [...Array(periods.value).keys()].map((el, index) => {
            if (index == 0) {
                return {
                    label: "首付款",
                    value: Math.ceil(payment.value),
                    time: dayjs(Date.now()).format("YYYY-MM-DD"),
                };
            }
            return {
                label: "第" + (index + 1) + "期",
                value: (rent * 1).toFixed(0),
                time: dayjs(Date.now()).add(index, "M").format("YYYY-MM-DD"),
            };
        });
        state.list = list;
    }
};
</script>

<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/icon.svg" alt="" />
            <span class="title">租租机</span>
            <b class="title_sub" @click="() => console.log(state)">租金计算器</b>
        </div>

        <div class="form">
            <div class="for_title">输入设备价格,租期,押金比例!</div>
            <input class="inp number" type="number" placeholder="请输入设备零售价" v-model="price" />

            <div class="select">
                <select class="inp inp_1" v-model="model" @change="() => {
                    state.periods = 0;
                }
                ">
                    <option class="inp_2" :value="0" disabled selected>请输入租赁方式</option>
                    <option v-for="item in options" :key="item.value" :value="item.value">
                        {{ item.label }}
                    </option>
                </select>
            </div>

            <div class="select">
                <select class="inp inp_1" v-model="periods">
                    <option class="inp_2" :value="0" disabled selected>选择分期期数</option>
                    <template v-if="state.model === 1">
                        <option v-for="item in periodsList" :key="item.value" :value="item.value">
                            {{ item.label }}
                        </option>
                    </template>
                    <template v-if="state.model === 2">
                        <option v-for="item in periodsList1" :key="'else-' + item.value" :value="item.value">
                            {{ item.label }}
                        </option>
                    </template>
                </select>
            </div>

            <div class="select" v-if="state.model === 1">
                <select class="inp inp_1" v-model="periods1">
                    <option class="inp_2" :value="0" disabled selected>选择首交期数</option>
                    <option v-for="item in periodsList2" :key="'else-' + item.value" :value="item.value">
                        {{ item.label }}
                    </option>
                </select>
            </div>
            <input v-if="state.model === 2" class="inp number" type="number" placeholder="请输入首付金额" v-model="payment" />
            <button class="inp btn" @click="rent">立即计算</button>
        </div>

        <div class="table">
            <div class="th">
                <div>期数</div>
                <div>付款日</div>
                <div>租金</div>
            </div>
            <div>
                <div class="th tr" v-for="(item, index) in state.list" :key="index">
                    <div>{{ item.label }}</div>
                    <div>{{ item.time }}</div>
                    <div>{{ item.value + "元" }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.table {
    margin-top: 15px;
    padding: 0 4vw;
    padding-bottom: 15px;
}

.th {
    display: flex;
    height: 40px;
    align-items: center;

    >div {
        flex: 1;
        text-align: center;
        color: #666;
        font-size: 14px;
    }
}

.tr {
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #ccc;

    >div {
        color: #999;
    }

    &:last-child {
        border: 0;
    }
}

.container {
    margin: 0;
    background: #f2f2f2;
    width: 100vw;
    height: max-content;
    min-height: 100vh;
}

.logo {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    color: #666;
}

.title_sub {
    color: #444;
}

.form {
    padding: 0 4vw;
}

.for_title {
    color: #666;
    margin-top: 15px;
    font-size: 13px;
}

.inp {
    border: 0;
    outline: none;
    width: 100%;
    height: 40px;
    text-indent: 1em;
    background: #fff;
}

.inp_1 {
    color: #777;
    text-indent: 0.8em;
}

.number {
    margin-top: 15px;
}

.select {
    padding-right: 1vw;
    background: #fff;
    margin-top: 15px;
}

.inp_2 {
    display: none;
}

.btn {
    background: #429588;
    margin-top: 15px;
    color: #fff;
    font-size: 16px;
}
</style>
