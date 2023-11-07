import controller_0 from "../../@survos/html-prettyify/src/controllers/prettify_controller.js";
import controller_1 from "../../controllers/hello_controller.js";
export const eagerControllers = {"survos--html-prettify-bundle--prettify": controller_0, "hello": controller_1};
export const lazyControllers = {"survos--api-grid-bundle--api-grid": () => Promise.all([import("../../@survos/api-grid/src/controllers/api_grid_controller.js"), import("datatables/media/css/jquery.dataTables.min.css"), import("datatables-select/dist/css/select.dataTables.min.css"), import("datatables.net-bs5/css/dataTables.bootstrap5.min.css")]).then((ret) => ret[0]), "survos--datatables-bundle--table": () => import("../../@survos/datatables/src/controllers/table_controller.js"), "survos--grid-bundle--grid": () => Promise.all([import("../../@survos/grid/src/controllers/grid_controller.js"), import("datatables/media/css/jquery.dataTables.min.css"), import("datatables.net-bs5/css/dataTables.bootstrap5.min.css")]).then((ret) => ret[0]), "survos--simple-datatables-bundle--table": () => Promise.all([import("../../@survos/simple-datatables/src/controllers/table_controller.js"), import("../../@survos/simple-datatables/style.css")]).then((ret) => ret[0])};
export const isApplicationDebug = true;