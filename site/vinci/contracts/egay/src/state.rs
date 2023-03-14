use cosmwasm_schema::schemars::JsonSchema;
use cosmwasm_schema::serde::{Deserialize, Serialize};

use cosmwasm_std::{Coin};
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub items: Vec<ItemInfo>,
    pub balances: Vec<Balance>,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct ItemInfo {
    pub id: u32,
    pub seller: HumanAddr,
    pub name: String,
    pub price: Coin,
    pub sold: bool,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Balance {
    pub owner: HumanAddr,
    pub balance: Coin,
}

pub const STATE: Item<State> = Item::new("state");
