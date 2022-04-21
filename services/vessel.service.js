// import { BehaviorSubject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${process.env.NEXT_PUBLIC_URL}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const vesselService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    getAllVessel,
    getAllCountry,
    getAllGRT,
    getOneVessel,
    addVessel
};

function login(username, password) {
    return fetchWrapper.post(`${baseUrl}authenticate`, { username, password })
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage,grt  publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

function getAllVessel() {
    return fetchWrapper.get(baseUrl+'vessel');
}

function getAllCountry(){
    return fetchWrapper.get(`${process.env.NEXT_PUBLIC_COUNTRY}`)
}

function getAllGRT(){
    return fetchWrapper.get(baseUrl+'grt');
}

function getOneVessel(id) {
    return fetchWrapper.get(baseUrl+`vessel/${id}`);
}

function addVessel(vessel) {
    return fetchWrapper.post(baseUrl+`vessel`,vessel);
}