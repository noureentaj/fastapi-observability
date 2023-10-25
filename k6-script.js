import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  var server_list = ["localhost:9193", "localhost:9194", "localhost:9195"]
  var endpoint_list = ["/", "/io_task", "/cpu_task", "/random_sleep", "/random_status", "/chain", "/error_test"]
  server_list.forEach(function(server) {
    endpoint_list.forEach(function(endpoint) {
      http.get("http://" + server + endpoint);
    });
  });
  sleep(0.5);
}
