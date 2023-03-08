//  SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract Counter{

    uint256 initValue;

    constructor (uint256 _initValue){
            initValue= _initValue;
    }

    function add1() public returns (uint256){
        initValue += 1;
        return initValue;
    }
}