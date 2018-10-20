pragma solidity ^0.4.22;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
contract Inheritance is Ownable {
  function close() public onlyOwner {
    selfdestruct(owner);
  }
}
