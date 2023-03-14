use crate::state::State;
use crate::msg::{ExecuteMsg, QueryMsg};

use cosmwasm_std::{
    Env, Querier,
    StdError, StdResult, to_binary, Binary, Api, Storage, Response
};

pub struct Deps<'a, S: Storage, A: Api, Q: Querier> {
    pub storage: &'a mut S,
    pub api: &'a A,
    pub querier: &'a Q,
}

#[derive(Debug)]
pub struct Contract<'a> {
    state: &'a mut State,
}

impl<'a> Contract<'a> {
    pub fn new(state: &'a mut State) -> Self {
        Self { state }
    }

    pub fn init<S: Storage, A: Api, Q: Querier>(
        &mut self,
        deps: Deps<S, A, Q>,
        env: Env,
        msg: ExecuteMsg,
    ) -> StdResult<Response> {
        // Initialize contract state here
        // Return the default InitResponse
        Ok(Response::default())
    }

    pub fn handle<S: Storage, A: Api, Q: Querier>(
        &mut self,
        deps: Deps<S, A, Q>,
        env: Env,
        msg: ExecuteMsg,
    ) -> StdResult<Response> {
        // Handle the incoming message and update the contract state
        // Return the default HandleResponse
        Ok(Response::default())
    }
    #[no_mangle]
pub extern "C" fn instantiate<S: Storage, A: Api, Q: Querier>(
    deps: Deps<S, A, Q>,
    env: Env,
    msg: ExecuteMsg,
) -> StdResult<Response> {
    // Initialize contract state here
    // Return the default InitResponse
    Ok(Response::default())
}

    pub fn query<S: Storage, A: Api, Q: Querier>(
        &self,
        deps: Deps<S, A, Q>,
        msg: QueryMsg,
    ) -> StdResult<Binary> {
        // Query the contract state and return the result as a Binary
        Ok(to_binary(&self.state)?)
    }
}
