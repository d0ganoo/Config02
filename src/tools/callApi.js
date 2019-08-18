import $ from 'jquery';

export const getData = function(){
    return $.ajax({
                headers: { 'X-Auth-Token': '3e5d7aa910c947379c6ece0f635b00a8' },
                url: 'http://api.football-data.org/v2/matches?status=LIVE',
                dataType: 'json',
                type: 'GET',
            });
};

