import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data"

export const damaSlice = createSlice({
    name: "dama",
    initialState: {
        items: data,
        tempRock1: null,
        tempRock2: null,
        tempColor: null
    },
    reducers: {
        updateRock1: (state, action) => {
            state.tempRock1 = action.payload
        },
        updateimgColor: (state, action) => {
            state.tempColor = action.payload
        },
        updateRock2: (state, action) => {
            state.tempRock2 = action.payload
        },
        changeRock: (state, action) => {
            let calcTempRock1 = (parseInt(state.tempRock1.id) + 8)
            let calcTempRock2 = (parseInt(state.tempRock1.id) - 8)
            let calcTempRock3 = (parseInt(state.tempRock1.id) + 1)
            let calcTempRock4 = (parseInt(state.tempRock1.id) - 1)
            let eatTempRock1 = (parseInt(state.tempRock1.id) + 16)
            let eatTempRock2 = (parseInt(state.tempRock1.id) - 16)
            let calcCheckRock1 = (parseInt(state.tempRock1.id) + 8)
            let calcCheckRock2 = (parseInt(state.tempRock1.id) + 16)
            let calcCheckRock3 = (parseInt(state.tempRock1.id) + 24)
            let calcCheckRock4 = (parseInt(state.tempRock1.id) + 32)
            let calcCheckRock5 = (parseInt(state.tempRock1.id) + 40)
            let calcCheckRock6 = (parseInt(state.tempRock1.id) + 48)
            let calcCheckRock7 = (parseInt(state.tempRock1.id) + 56)
            let calcCheckRock8 = (parseInt(state.tempRock1.id) + 64)
            let calcCheckRock9 = (parseInt(state.tempRock1.id) - 8)
            let calcCheckRock10 = (parseInt(state.tempRock1.id) - 16)
            let calcCheckRock11 = (parseInt(state.tempRock1.id) - 24)
            let calcCheckRock12 = (parseInt(state.tempRock1.id) - 32)
            let calcCheckRock13 = (parseInt(state.tempRock1.id) - 40)
            let calcCheckRock14 = (parseInt(state.tempRock1.id) - 48)
            let calcCheckRock15 = (parseInt(state.tempRock1.id) - 56)
            let calcCheckRock16 = (parseInt(state.tempRock1.id) - 64)
            let calcCheckRock17 = (parseInt(state.tempRock1.id) - 1)
            let calcCheckRock18 = (parseInt(state.tempRock1.id) - 2)
            let calcCheckRock19 = (parseInt(state.tempRock1.id) - 3)
            let calcCheckRock20 = (parseInt(state.tempRock1.id) - 4)
            let calcCheckRock21 = (parseInt(state.tempRock1.id) - 5)
            let calcCheckRock22 = (parseInt(state.tempRock1.id) - 6)
            let calcCheckRock23 = (parseInt(state.tempRock1.id) - 7)
            let calcCheckRock24 = (parseInt(state.tempRock1.id) - 8)
            let calcCheckRock25 = (parseInt(state.tempRock1.id) + 1)
            let calcCheckRock26 = (parseInt(state.tempRock1.id) + 2)
            let calcCheckRock27 = (parseInt(state.tempRock1.id) + 3)
            let calcCheckRock28 = (parseInt(state.tempRock1.id) + 4)
            let calcCheckRock29 = (parseInt(state.tempRock1.id) + 5)
            let calcCheckRock30 = (parseInt(state.tempRock1.id) + 6)
            let calcCheckRock31 = (parseInt(state.tempRock1.id) + 7)
            let calcCheckRock32 = (parseInt(state.tempRock1.id) + 8)
            let calcArrowCheck = (parseInt(state.tempRock2.id) - parseInt(state.tempRock1.id))
            state.items.map((item) => {
                if (item.id === parseInt(state.tempRock2.id)) {
                    if ((item.rockColor === "empty.png") && (state.tempColor === "blackRock.png")) {
                        if ((parseInt(item.id) === (calcTempRock1)) || (parseInt(item.id) === (calcTempRock3)) || (parseInt(item.id) === (calcTempRock4))) {
                            state.items.map((item2) => {
                                if (item2.id === parseInt(state.tempRock1.id)) {
                                    state.tempColor = item2.rockColor
                                    item.rockColor = state.tempColor
                                    state.items.map((item3) => {
                                        if (item3.id === parseInt(state.tempRock1.id)) {
                                            item3.rockColor = "empty.png"
                                        }
                                    })
                                }
                            })
                        }
                    }
                    if ((item.rockColor === "empty.png") && (state.tempColor === "whiteRock.png")) {
                        if ((parseInt(item.id) === (calcTempRock2)) || (parseInt(item.id) === (calcTempRock3)) || (parseInt(item.id) === (calcTempRock4))) {
                            state.items.map((item2) => {
                                if (item2.id === parseInt(state.tempRock1.id)) {
                                    state.tempColor = item2.rockColor
                                    item.rockColor = state.tempColor
                                    state.items.map((item3) => {
                                        if (item3.id === parseInt(state.tempRock1.id)) {
                                            item3.rockColor = "empty.png"
                                        }
                                    })
                                }
                            })
                        }
                    }
                }
            });
            state.items.map((item) => {
                if (item.id === parseInt(state.tempRock2.id)) {
                    if (item.rockColor === "empty.png") {
                        if ((parseInt(item.id) === eatTempRock1) && (state.tempColor === "blackRock.png")) {
                            state.items.map((itemEat) => {
                                if (parseInt(itemEat.id) === (calcTempRock1)) {
                                    if ((itemEat.rockColor !== state.tempColor) && (itemEat.rockColor !== "empty.png")) {
                                        item.rockColor = state.tempColor
                                        state.items.map((itemFind) => {
                                            if (parseInt(itemFind.id) === calcTempRock1) {
                                                itemFind.rockColor = "empty.png"
                                                state.items.map((itemfirst) => {
                                                    if (parseInt(itemfirst.id) === parseInt(state.tempRock1.id)) {
                                                        itemfirst.rockColor = "empty.png"
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })
                        }
                        if ((parseInt(item.id) === eatTempRock2) && (state.tempColor === "whiteRock.png")) {
                            state.items.map((itemEat) => {
                                if (parseInt(itemEat.id) === (calcTempRock2)) {
                                    if ((itemEat.rockColor !== state.tempColor) && (itemEat.rockColor !== "empty.png")) {
                                        item.rockColor = state.tempColor
                                        state.items.map((itemFind) => {
                                            if (parseInt(itemFind.id) === calcTempRock2) {
                                                itemFind.rockColor = "empty.png"
                                                state.items.map((itemfirst) => {
                                                    if (parseInt(itemfirst.id) === parseInt(state.tempRock1.id)) {
                                                        itemfirst.rockColor = "empty.png"
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                }
            });
            state.items.map((check) => {
                if (check.id === parseInt(state.tempRock2.id)) {
                    if ((check.id === parseInt(1)) || (check.id === parseInt(2)) || (check.id === parseInt(3)) || (check.id === parseInt(4)) ||
                        (check.id === parseInt(5)) || (check.id === parseInt(6)) || (check.id === parseInt(7)) || (check.id === parseInt(8)) ||
                        (check.id === parseInt(57)) || (check.id === parseInt(58)) || (check.id === parseInt(59)) || (check.id === parseInt(60)) ||
                        (check.id === parseInt(61)) || (check.id === parseInt(62)) || (check.id === parseInt(63)) || (check.id === parseInt(64))) {
                        check.isCheck = true
                    }
                }
            })
            state.items.map((checkTrue) => {
                if (checkTrue.id === parseInt(state.tempRock1.id)) {
                    if (checkTrue.isCheck === true) {
                        state.items.map((blackCheck) => {
                            if (blackCheck.id === parseInt(state.tempRock2.id)) {
                                if (blackCheck.rockColor === "empty.png") {
                                    if ((blackCheck.id === calcCheckRock1) || (blackCheck.id === calcCheckRock2) || (blackCheck.id === calcCheckRock3) || (blackCheck.id === calcCheckRock4) ||
                                        (blackCheck.id === calcCheckRock5) || (blackCheck.id === calcCheckRock6) || (blackCheck.id === calcCheckRock7) || (blackCheck.id === calcCheckRock8) ||
                                        (blackCheck.id === calcCheckRock9) || (blackCheck.id === calcCheckRock10) || (blackCheck.id === calcCheckRock11) || (blackCheck.id === calcCheckRock12) ||
                                        (blackCheck.id === calcCheckRock13) || (blackCheck.id === calcCheckRock14) || (blackCheck.id === calcCheckRock15) || (blackCheck.id === calcCheckRock16) ||
                                        (blackCheck.id === calcCheckRock17) || (blackCheck.id === calcCheckRock18) || (blackCheck.id === calcCheckRock19) || (blackCheck.id === calcCheckRock20) ||
                                        (blackCheck.id === calcCheckRock21) || (blackCheck.id === calcCheckRock22) || (blackCheck.id === calcCheckRock23) || (blackCheck.id === calcCheckRock24) ||
                                        (blackCheck.id === calcCheckRock25) || (blackCheck.id === calcCheckRock26) || (blackCheck.id === calcCheckRock27) || (blackCheck.id === calcCheckRock28) ||
                                        (blackCheck.id === calcCheckRock29) || (blackCheck.id === calcCheckRock30) || (blackCheck.id === calcCheckRock31) || (blackCheck.id === calcCheckRock32)
                                    ) {
                                        checkTrue.rockColor = "empty.png"
                                        blackCheck.rockColor = state.tempColor
                                        blackCheck.isCheck = true
                                        if ((calcArrowCheck > parseInt(-8)) && (calcArrowCheck < parseInt(8)) && (blackCheck.id > checkTrue.id)) {
                                            for (let i = checkTrue.id; i <= blackCheck.id; i++) {
                                                state.items.map((itemi) => {
                                                    if (itemi.id === parseInt(i)) {
                                                        console.log(itemi.id)
                                                        itemi.rockColor = "empty.png"
                                                        blackCheck.rockColor = state.tempColor
                                                    }
                                                })
                                            }
                                        }
                                        if ((calcArrowCheck > parseInt(-8)) && (calcArrowCheck < parseInt(8)) && (blackCheck.id < checkTrue.id)) {
                                            for (let i = checkTrue.id; i >= blackCheck.id; i--) {
                                                state.items.map((itemi) => {
                                                    if (itemi.id === parseInt(i)) {
                                                        console.log(itemi.id)
                                                        itemi.rockColor = "empty.png"
                                                        blackCheck.rockColor = state.tempColor
                                                    }
                                                })
                                            }
                                        }
                                        if ((calcArrowCheck > parseInt(-57)) && (calcArrowCheck < parseInt(57)) && (blackCheck.id > checkTrue.id)) {
                                            for (let i = checkTrue.id; i <= blackCheck.id; i = i + 8) {
                                                state.items.map((itemi) => {
                                                    if (itemi.id === parseInt(i)) {
                                                        console.log(itemi.id)
                                                        itemi.rockColor = "empty.png"
                                                        blackCheck.rockColor = state.tempColor
                                                    }
                                                })
                                            }
                                        }
                                        if ((calcArrowCheck > parseInt(-57)) && (calcArrowCheck < parseInt(57)) && (blackCheck.id < checkTrue.id)) {
                                            for (let i = checkTrue.id; i >= blackCheck.id; i = i - 8) {
                                                state.items.map((itemi) => {
                                                    if (itemi.id === parseInt(i)) {
                                                        console.log(itemi.id)
                                                        itemi.rockColor = "empty.png"
                                                        blackCheck.rockColor = state.tempColor
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }

                }
            })
        }
    }
})
export const { updateRock1, updateRock2, changeRock, updateimgColor } = damaSlice.actions
export default damaSlice.reducer