import React from 'react';
import './index.css';
import {rerenderRoutTree} from "./render";
import state from "./Redux/State";

rerenderRoutTree(state)