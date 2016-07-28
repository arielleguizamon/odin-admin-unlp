var app = angular.module('odin.fileControllers', ['ngFileUpload']);

app.factory('model', function ($resource) {
    return $resource();
});


function FileListController($scope, $location, rest, $rootScope, Flash, Alertify, $routeParams, modelService) {


    modelService.initService("File", "files", $scope);

    $scope.filtersView = [{
            name: 'Estado',
            model: 'statuses',
            key: 'name',
            modelInput: 'status',
            multiple: true
        }, {
            name: 'Autor',
            model: 'users',
            key: 'username',
            modelInput: 'owner',
            multiple: false
        }];
    $scope.confirmDelete = function (item) {
        modelService.confirmDelete(item);
    }

    $scope.deleteModel = function (model) {
        modelService.delete($scope, model);
    };

    $scope.edit = function (model) {
        modelService.edit($scope, model);
    }

    $scope.view = function (model) {
        modelService.view($scope, model);
    }

    $scope.limit = 20;

    $scope.q = "&skip=0&limit=" + $scope.limit;

    modelService.loadAll($scope);

    $scope.paging = function (event, page, pageSize, total) {
        var skip = (page - 1) * $scope.limit;
        $scope.q = "&skip=" + skip + "&limit=" + $scope.limit;
        modelService.loadAll($scope);
    };
}

function FileViewController($scope, Flash, rest, $routeParams, $location, modelService, $sce, Alertify) {
    modelService.initService("File", "files", $scope);
    $scope.getHtml = function (html) {
        return $sce.trustAsHtml(html);
    };

    var loadModel = function () {
        $scope.model = rest().findOne({
            id: $routeParams.id,
            type: $scope.type,
            //params: "include=tags"
        }/*, function () {
            var tags = [];
            for (var i = 0; i < $scope.model.tags.length; i++) {
                tags.push('<span class="label label-primary">' + $scope.model.tags[i].name + '</span>');
            }
            ;
            $scope.model.tags = tags.join(" - ");
        }*/);
    };

    $scope.edit = function (model) {
        modelService.edit($scope, model);
    };

    var update = function () {

        $scope.tempData = {
            id: $scope.model.id,
            publishedAt: $scope.model.publishedAt,
            status: $scope.model.status
        };

        rest().update({
            type: $scope.type,
            id: $scope.tempData.id
        }, $scope.tempData, function (resp) {
            loadModel();
            //var url = '/' + $scope.type;
            // $location.path(url);
        });
    };

    $scope.publish = function () {
        $scope.model.publishedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        $scope.model.status = 'qWRhpRV';
        update();
    };

    $scope.unPublish = function () {
        Alertify.confirm('¿Está seguro que quiere despublicar este archivo?').then(
                function onOk() {
                    $scope.model.publishedAt = null;
                    $scope.model.status = 'rWRhpRV';
                    update();
                },
                function onCancel() {
                    return false;
                }
        );
    };

    loadModel();

    $scope.confirmDelete = function (item) {
        Alertify.confirm('¿Está seguro que quiere borrar este archivo?').then(
                function onOk() {
                    rest().delete({
                        type: $scope.type,
                        id: $scope.model.id
                    }, function (resp) {
                        var url = "/" + $scope.type;
                        $location.path(url);
                    });
                },
                function onCancel() {
                    return false;
                }
        );
    };
}

function FileCreateController($scope, $sce, rest, model, Flash, $location, Upload, $rootScope, modelService, $routeParams, Alertify) {
    modelService.initService("File", "files", $scope);

    $scope.clearUpload = function () {
        $scope.fileModel.name = "";
        $scope.fileModel.type = "";
    }

    $scope.beforeChange = function ($files) {
        console.log($files[0]);
        $scope.fileModel.name = $files[0].name;
        //$scope.model.name = $scope.fileModel.name;
        var type = $files[0].name.split('.').pop();
        if (type == "doc" || type == "docx") {
            $scope.fileModel.type = 'fa-file-word-o';
        } else if (type == "xlsx" || type == "xls") {
            $scope.fileModel.type = 'fa-file-excel-o';
        } else if (type == "pdf") {
            $scope.fileModel.type = 'fa-file-pdf-o';
        } else if (type == "rar" || type == "zip") {
            $scope.fileModel.type = 'fa-file-archive-o';
        } else {
            $scope.fileModel.type = 'fa-file-text-o';
        }
    }

    $scope.status_default = true;
    $scope.unsave = true;

    $scope.model = new model();
    $scope.model.uploadFile = '';
    $scope.steps = [];
    $scope.steps[0] = "active";
    $scope.steps[1] = "undone";
    $scope.steps[2] = "undone";
    $scope.stepactive = 0;

    $scope.dataset_disabled = 'enabled';
    if (!angular.isUndefined($routeParams.dataset)) {
        $scope.model.dataset = rest().findOne({
            id: $routeParams.dataset,
            type: 'datasets'
        });
        $scope.dataset_disabled = 'disabled';
    }

    $scope.fileModel = []
    $scope.checkstep = function (step) {
        console.log($scope.model.uploadFile);
        if ($scope.model.uploadFile == null && step == 1 && $scope.fileModel.name)
        {
            $scope.clearUpload();
            Alertify.alert('Archivo no permitido.');
        } else {
            if (($scope.fileModel.name && step == 1 && $scope.model.uploadFile != null) || ($scope.fileModel.name && step == 2 && $scope.form.$valid && $scope.model.uploadFile != null) || step == 0) {

                if (step == 0) {
                    $scope.steps[0] = "active";
                    $scope.steps[1] = "undone";
                    $scope.steps[2] = "undone";
                } else if (step == 1) {
                    $scope.steps[0] = "done";
                    $scope.steps[1] = "active";
                    $scope.steps[2] = "undone";
                } else {
                    $scope.steps[0] = "done";
                    $scope.steps[1] = "done";
                    $scope.steps[2] = "active";
                }
                $scope.stepactive = step;
            }
        }
    }
    $scope.step = function (step) {
        if (($scope.fileModel.name && step == 1) || ($scope.fileModel.name && step == 2) || step == 0 && ($scope.model.uploadFile != null)) {
            var step = $scope.steps[step];
            if (step == "undone") {
                return "undone";
            } else if (step == "done") {
                return "done";
            } else {
                return "active";

            }
        }

    }
    $scope.getHtml = function (html) {
        return $sce.trustAsHtml(html);
    };

    $scope.add = function (isValid) {
        $scope.unsave = false;
        $scope.uploadImageProgress = 10;
        var data = {
            'name': $scope.model.name, //.replace(/\.[^/.]+$/, ""), //removes file extension from name
            'status': $scope.model.status,
            'organization': $scope.model.organization,
            'dataset': $scope.model.dataset,
            'description': $scope.model.description,
            'notes': $scope.model.notes,
            //  'url': $scope.model.url,
            'visible': $scope.model.visible,
            'owner': $scope.model.owner,
            'updateFrequency': $scope.model.updateFrequency,
            //'tags': $scope.model.tags ? $scope.model.tags.join(",") : "",
            'updated': $scope.model.updated,
            //'gatheringDate': $scope.model.gatheringDate,//.toISOString().slice(0, 10), //new Date().toISOString().slice(0, 19).replace('T', ' ');
            'uploadFile': $scope.model.uploadFile,
            
        };

        Upload.upload({
            url: $rootScope.url + "/files",
            data: data
        }).then(function (resp) {
            $location.url('/files/' + resp.data.data.id + '/view');
        }, function (resp) {
            // alert(resp.status);
            $scope.unsave = false;
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.uploadImageProgress = progressPercentage;
            $scope.unsave = false;
        });
    };



}

function FileEditController($rootScope, $scope, Flash, rest, $routeParams, model, $location, modelService, $sce, Upload) {
    modelService.initService("File", "files", $scope);
    $scope.model = new model();

    $scope.status_default = false;

    $scope.model = new model();
    $scope.steps = [];
    $scope.steps[0] = "active";
    $scope.steps[1] = "undone";
    $scope.steps[2] = "undone";
    $scope.stepactive = 0;

    $scope.fileModel = []

    $scope.checkstep = function (step) {

        if (($scope.fileModel.name && step == 1) || ($scope.fileModel.name && step == 2) || (step == 0)) {
            if (step == 0) {
                $scope.steps[0] = "active";
                $scope.steps[1] = "undone";
                $scope.steps[2] = "undone";
            } else if (step == 1) {
                $scope.steps[0] = "done";
                $scope.steps[1] = "active";
                $scope.steps[2] = "undone";
            } else {
                $scope.steps[0] = "done";
                $scope.steps[1] = "done";
                $scope.steps[2] = "active";
            }
            $scope.stepactive = step;
        }
    }
    $scope.step = function (step) {
        if (($scope.fileModel.name && step == 1) || ($scope.fileModel.name && step == 2) || step == 0) {
            var step = $scope.steps[step];
            if (step == "undone") {
                return "undone";
            } else if (step == "done") {
                return "done";
            } else {
                return "active";

            }
        }

    }
    $scope.getHtml = function (html) {
        return $sce.trustAsHtml(html);
    };


    $scope.update = function (isValid) {


        $scope.uploadImageProgress = 10;
        var data = {
            'name': $scope.model.name,
            'status': $scope.model.status,
            'organization': $scope.model.organization,
            'dataset': $scope.model.dataset,
            'description': $scope.model.description,
            'notes': $scope.model.notes,
            // 'url': $scope.model.url,
            'visible': $scope.model.visible,
            'owner': $scope.model.owner,
            'updateFrequency': $scope.model.updateFrequency,
            //'tags': $scope.model.tags ? $scope.model.tags.join(",") : "",
            'updated': $scope.model.updated,
            //'gatheringDate': $scope.model.gatheringDate //new Date().toISOString().slice(0, 19).replace('T', ' ');
        }

        if (isValid) {
            rest().update({
                type: $scope.type,
                id: $scope.model.id
            }, data, function (resp) {
                var url = '/' + $scope.type;
                $location.path(url);
            });
        }


    };

    $scope.load = function () {
        $scope.model = rest().findOne({
            id: $routeParams.id,
            type: $scope.type,
            //params: "include=tags"
        }, function () {
            $scope.model.updateFrequency = $scope.model.updateFrequency.id;
            $scope.model.status = $scope.model.status.id;
            //$scope.model.gatheringDate = moment($scope.model.gatheringDate);

            $scope.fileModel.name = $scope.model.name;
            var type = $scope.fileModel.name.split('.').pop();
            if (type == "doc" || type == "docx") {
                $scope.fileModel.type = 'fa-file-word-o';
            } else if (type == "xlsx" || type == "xls") {
                $scope.fileModel.type = 'fa-file-excel-o';
            } else if (type == "pdf") {
                $scope.fileModel.type = 'fa-file-pdf-o';
            } else if (type == "rar" || type == "zip") {
                $scope.fileModel.type = 'fa-file-archive-o';
            } else {
                $scope.fileModel.type = 'fa-file-text-o';
            }
        });
    };

    $scope.load();
}