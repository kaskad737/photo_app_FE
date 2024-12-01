<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">User List:</h1>
            </div>
        </div>
        <ul>
            <li v-for="user in users" class="user-list-item">
                <p class="user-list-row">  
                    <span class="user-name">
                        <span class="is-active-span" :class="user.is_active ? 'online' : 'offline'">
                        </span>
                        {{user.first_name}} {{user.last_name}}
                    </span>
                    <span>
                        <a :href="`mailto:${user.email}`" class="link">
                            {{user.email}}
                        </a>
                    </span>
                    <span>
                        <a :href="`tel:${user.phone}`" class="link">
                            {{user.phone}}
                        </a>
                    </span>
                    <span>{{user.role}}</span>
                    <span>registered on {{formatDate(user.registered)}}</span>
                </p>

            </li>
        </ul>

    </div>
</template>

<script>
import users from '../../assets/users.json'
console.log(users)

    export default {
    name: 'UserList',
    data() { 
        return {
             users,   
        }
    },
    methods: {
        formatDate(dateString) {
            const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}) ([-+]\d{2}:\d{2})$/;
            const match = dateString.match(regex);

            if (!match) { 
                return 'Invalid date'
            }
            const [, year, month, day] = match;

            return `${day}.${month}.${year}`;
            }
    }
}
</script>

<style scoped>
span{
    display: block;
}
.link{
    color: inherit;
}
.user-list-item{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 1px solid grey;
    padding: 10px;
}
.is-active-span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;

}
.online{
 background-color: rgb(26, 126, 26);
}
.offline{
background-color: rgb(255, 45, 45);
}

</style>