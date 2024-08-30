"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
// user.schema.ts
var mongoose_1 = require("@nestjs/mongoose");
var User = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _fullname_decorators;
    var _fullname_initializers = [];
    var _fullname_extraInitializers = [];
    var _dob_decorators;
    var _dob_initializers = [];
    var _dob_extraInitializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _gender_extraInitializers = [];
    var _cin_decorators;
    var _cin_initializers = [];
    var _cin_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _mail_decorators;
    var _mail_initializers = [];
    var _mail_extraInitializers = [];
    var _adresse_decorators;
    var _adresse_initializers = [];
    var _adresse_extraInitializers = [];
    var _street_decorators;
    var _street_initializers = [];
    var _street_extraInitializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _state_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _postalcode_decorators;
    var _postalcode_initializers = [];
    var _postalcode_extraInitializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _country_extraInitializers = [];
    var _typeofdegree_decorators;
    var _typeofdegree_initializers = [];
    var _typeofdegree_extraInitializers = [];
    var _speciality_decorators;
    var _speciality_initializers = [];
    var _speciality_extraInitializers = [];
    var _dateofdegree_decorators;
    var _dateofdegree_initializers = [];
    var _dateofdegree_extraInitializers = [];
    var _jobtitle_decorators;
    var _jobtitle_initializers = [];
    var _jobtitle_extraInitializers = [];
    var _departement_decorators;
    var _departement_initializers = [];
    var _departement_extraInitializers = [];
    var _linemanager_decorators;
    var _linemanager_initializers = [];
    var _linemanager_extraInitializers = [];
    var _startdate_decorators;
    var _startdate_initializers = [];
    var _startdate_extraInitializers = [];
    var _enddate_decorators;
    var _enddate_initializers = [];
    var _enddate_extraInitializers = [];
    var _avatar_decorators;
    var _avatar_initializers = [];
    var _avatar_extraInitializers = [];
    var _id1_decorators;
    var _id1_initializers = [];
    var _id1_extraInitializers = [];
    var _id2_decorators;
    var _id2_initializers = [];
    var _id2_extraInitializers = [];
    var _degree_decorators;
    var _degree_initializers = [];
    var _degree_extraInitializers = [];
    var _mdp_decorators;
    var _mdp_initializers = [];
    var _mdp_extraInitializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.fullname = __runInitializers(this, _fullname_initializers, void 0);
            this.dob = (__runInitializers(this, _fullname_extraInitializers), __runInitializers(this, _dob_initializers, void 0));
            this.gender = (__runInitializers(this, _dob_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
            this.cin = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _cin_initializers, void 0));
            this.phone = (__runInitializers(this, _cin_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.mail = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _mail_initializers, void 0));
            this.adresse = (__runInitializers(this, _mail_extraInitializers), __runInitializers(this, _adresse_initializers, void 0));
            this.street = (__runInitializers(this, _adresse_extraInitializers), __runInitializers(this, _street_initializers, void 0));
            this.state = (__runInitializers(this, _street_extraInitializers), __runInitializers(this, _state_initializers, void 0));
            this.city = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _city_initializers, void 0));
            this.postalcode = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _postalcode_initializers, void 0));
            this.country = (__runInitializers(this, _postalcode_extraInitializers), __runInitializers(this, _country_initializers, void 0));
            this.typeofdegree = (__runInitializers(this, _country_extraInitializers), __runInitializers(this, _typeofdegree_initializers, void 0));
            this.speciality = (__runInitializers(this, _typeofdegree_extraInitializers), __runInitializers(this, _speciality_initializers, void 0));
            this.dateofdegree = (__runInitializers(this, _speciality_extraInitializers), __runInitializers(this, _dateofdegree_initializers, void 0));
            this.jobtitle = (__runInitializers(this, _dateofdegree_extraInitializers), __runInitializers(this, _jobtitle_initializers, void 0));
            this.departement = (__runInitializers(this, _jobtitle_extraInitializers), __runInitializers(this, _departement_initializers, void 0));
            this.linemanager = (__runInitializers(this, _departement_extraInitializers), __runInitializers(this, _linemanager_initializers, void 0));
            this.startdate = (__runInitializers(this, _linemanager_extraInitializers), __runInitializers(this, _startdate_initializers, void 0));
            this.enddate = (__runInitializers(this, _startdate_extraInitializers), __runInitializers(this, _enddate_initializers, void 0));
            this.avatar = (__runInitializers(this, _enddate_extraInitializers), __runInitializers(this, _avatar_initializers, void 0)); // Path to the image file
            this.id1 = (__runInitializers(this, _avatar_extraInitializers), __runInitializers(this, _id1_initializers, void 0)); // Path to the image file
            this.id2 = (__runInitializers(this, _id1_extraInitializers), __runInitializers(this, _id2_initializers, void 0)); // Path to the image file
            this.degree = (__runInitializers(this, _id2_extraInitializers), __runInitializers(this, _degree_initializers, void 0)); // Path to the image file
            this.mdp = (__runInitializers(this, _degree_extraInitializers), __runInitializers(this, _mdp_initializers, void 0));
            __runInitializers(this, _mdp_extraInitializers);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _fullname_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _dob_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _gender_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _cin_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _phone_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _mail_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _adresse_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _street_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _state_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _city_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _postalcode_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _country_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _typeofdegree_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _speciality_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _dateofdegree_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _jobtitle_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _departement_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _linemanager_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _startdate_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _enddate_decorators = [(0, mongoose_1.Prop)()];
        _avatar_decorators = [(0, mongoose_1.Prop)()];
        _id1_decorators = [(0, mongoose_1.Prop)()];
        _id2_decorators = [(0, mongoose_1.Prop)()];
        _degree_decorators = [(0, mongoose_1.Prop)()];
        _mdp_decorators = [(0, mongoose_1.Prop)({ required: true })];
        __esDecorate(null, null, _fullname_decorators, { kind: "field", name: "fullname", static: false, private: false, access: { has: function (obj) { return "fullname" in obj; }, get: function (obj) { return obj.fullname; }, set: function (obj, value) { obj.fullname = value; } }, metadata: _metadata }, _fullname_initializers, _fullname_extraInitializers);
        __esDecorate(null, null, _dob_decorators, { kind: "field", name: "dob", static: false, private: false, access: { has: function (obj) { return "dob" in obj; }, get: function (obj) { return obj.dob; }, set: function (obj, value) { obj.dob = value; } }, metadata: _metadata }, _dob_initializers, _dob_extraInitializers);
        __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
        __esDecorate(null, null, _cin_decorators, { kind: "field", name: "cin", static: false, private: false, access: { has: function (obj) { return "cin" in obj; }, get: function (obj) { return obj.cin; }, set: function (obj, value) { obj.cin = value; } }, metadata: _metadata }, _cin_initializers, _cin_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _mail_decorators, { kind: "field", name: "mail", static: false, private: false, access: { has: function (obj) { return "mail" in obj; }, get: function (obj) { return obj.mail; }, set: function (obj, value) { obj.mail = value; } }, metadata: _metadata }, _mail_initializers, _mail_extraInitializers);
        __esDecorate(null, null, _adresse_decorators, { kind: "field", name: "adresse", static: false, private: false, access: { has: function (obj) { return "adresse" in obj; }, get: function (obj) { return obj.adresse; }, set: function (obj, value) { obj.adresse = value; } }, metadata: _metadata }, _adresse_initializers, _adresse_extraInitializers);
        __esDecorate(null, null, _street_decorators, { kind: "field", name: "street", static: false, private: false, access: { has: function (obj) { return "street" in obj; }, get: function (obj) { return obj.street; }, set: function (obj, value) { obj.street = value; } }, metadata: _metadata }, _street_initializers, _street_extraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
        __esDecorate(null, null, _postalcode_decorators, { kind: "field", name: "postalcode", static: false, private: false, access: { has: function (obj) { return "postalcode" in obj; }, get: function (obj) { return obj.postalcode; }, set: function (obj, value) { obj.postalcode = value; } }, metadata: _metadata }, _postalcode_initializers, _postalcode_extraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
        __esDecorate(null, null, _typeofdegree_decorators, { kind: "field", name: "typeofdegree", static: false, private: false, access: { has: function (obj) { return "typeofdegree" in obj; }, get: function (obj) { return obj.typeofdegree; }, set: function (obj, value) { obj.typeofdegree = value; } }, metadata: _metadata }, _typeofdegree_initializers, _typeofdegree_extraInitializers);
        __esDecorate(null, null, _speciality_decorators, { kind: "field", name: "speciality", static: false, private: false, access: { has: function (obj) { return "speciality" in obj; }, get: function (obj) { return obj.speciality; }, set: function (obj, value) { obj.speciality = value; } }, metadata: _metadata }, _speciality_initializers, _speciality_extraInitializers);
        __esDecorate(null, null, _dateofdegree_decorators, { kind: "field", name: "dateofdegree", static: false, private: false, access: { has: function (obj) { return "dateofdegree" in obj; }, get: function (obj) { return obj.dateofdegree; }, set: function (obj, value) { obj.dateofdegree = value; } }, metadata: _metadata }, _dateofdegree_initializers, _dateofdegree_extraInitializers);
        __esDecorate(null, null, _jobtitle_decorators, { kind: "field", name: "jobtitle", static: false, private: false, access: { has: function (obj) { return "jobtitle" in obj; }, get: function (obj) { return obj.jobtitle; }, set: function (obj, value) { obj.jobtitle = value; } }, metadata: _metadata }, _jobtitle_initializers, _jobtitle_extraInitializers);
        __esDecorate(null, null, _departement_decorators, { kind: "field", name: "departement", static: false, private: false, access: { has: function (obj) { return "departement" in obj; }, get: function (obj) { return obj.departement; }, set: function (obj, value) { obj.departement = value; } }, metadata: _metadata }, _departement_initializers, _departement_extraInitializers);
        __esDecorate(null, null, _linemanager_decorators, { kind: "field", name: "linemanager", static: false, private: false, access: { has: function (obj) { return "linemanager" in obj; }, get: function (obj) { return obj.linemanager; }, set: function (obj, value) { obj.linemanager = value; } }, metadata: _metadata }, _linemanager_initializers, _linemanager_extraInitializers);
        __esDecorate(null, null, _startdate_decorators, { kind: "field", name: "startdate", static: false, private: false, access: { has: function (obj) { return "startdate" in obj; }, get: function (obj) { return obj.startdate; }, set: function (obj, value) { obj.startdate = value; } }, metadata: _metadata }, _startdate_initializers, _startdate_extraInitializers);
        __esDecorate(null, null, _enddate_decorators, { kind: "field", name: "enddate", static: false, private: false, access: { has: function (obj) { return "enddate" in obj; }, get: function (obj) { return obj.enddate; }, set: function (obj, value) { obj.enddate = value; } }, metadata: _metadata }, _enddate_initializers, _enddate_extraInitializers);
        __esDecorate(null, null, _avatar_decorators, { kind: "field", name: "avatar", static: false, private: false, access: { has: function (obj) { return "avatar" in obj; }, get: function (obj) { return obj.avatar; }, set: function (obj, value) { obj.avatar = value; } }, metadata: _metadata }, _avatar_initializers, _avatar_extraInitializers);
        __esDecorate(null, null, _id1_decorators, { kind: "field", name: "id1", static: false, private: false, access: { has: function (obj) { return "id1" in obj; }, get: function (obj) { return obj.id1; }, set: function (obj, value) { obj.id1 = value; } }, metadata: _metadata }, _id1_initializers, _id1_extraInitializers);
        __esDecorate(null, null, _id2_decorators, { kind: "field", name: "id2", static: false, private: false, access: { has: function (obj) { return "id2" in obj; }, get: function (obj) { return obj.id2; }, set: function (obj, value) { obj.id2 = value; } }, metadata: _metadata }, _id2_initializers, _id2_extraInitializers);
        __esDecorate(null, null, _degree_decorators, { kind: "field", name: "degree", static: false, private: false, access: { has: function (obj) { return "degree" in obj; }, get: function (obj) { return obj.degree; }, set: function (obj, value) { obj.degree = value; } }, metadata: _metadata }, _degree_initializers, _degree_extraInitializers);
        __esDecorate(null, null, _mdp_decorators, { kind: "field", name: "mdp", static: false, private: false, access: { has: function (obj) { return "mdp" in obj; }, get: function (obj) { return obj.mdp; }, set: function (obj, value) { obj.mdp = value; } }, metadata: _metadata }, _mdp_initializers, _mdp_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
