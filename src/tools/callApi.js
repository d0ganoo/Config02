import $ from 'jquery';

export const getData = function(url){
    return $.ajax({
                headers: { 'X-Auth-Token': '3e5d7aa910c947379c6ece0f635b00a8' },
                url: url,
                dataType: 'json',
                type: 'GET',
            });
};

