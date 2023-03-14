use thiserror::Error;

#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("Invalid item ID")]
    InvalidItemId,
    #[error("Item not found")]
    ItemNotFound,
    #[error("Insufficient balance")]
    InsufficientBalance,
    #[error("Item already sold")]
    ItemAlreadySold,
    #[error("Invalid item owner")]
    InvalidItemOwner,
    #[error("Invalid price")]
    InvalidPrice,
}
